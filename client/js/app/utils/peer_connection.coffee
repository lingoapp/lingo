Backbone = require('backbone')
_ = require('underscore')
UUID = require('node-uuid')

adapter = require('./adapter.coffee')

class GenericPC
  init: (cb) ->
    _.extend @, Backbone.Events

    constraints =
      optional: [{'DtlsSrtpKeyAgreement': true}]
      #optional: [{RtpDataChannels: true}]

    stun_server = 
      url: 'stun:stun.l.google.com:19302'

    turn_server =
      url:        'turn:149.56.100.213:3478'
      username:   'public'
      credential: 'lingo'

    config = iceServers: [stun_server, turn_server ]

    @pc = new adapter.RTCPeerConnection(config, constraints)

    @pc.onicecandidate   = (event) =>
      if event.candidate
        @sendSignal
          type:       "candidate", 
          label:      event.candidate.sdpMLineIndex, 
          id:         event.candidate.sdpMid, 
          candidate:  event.candidate.candidate

    cb(@pc) if cb

  initiate: () ->
    @pc.createOffer ((sdp) =>
      @pc.setLocalDescription sdp
      @sendSignal sdp), ((err) =>
      @log "Error creating offer: ", err), @sdpConstraints

  processOffer: (msg) ->
    @log "Processing offer", msg

    @pc.setRemoteDescription new adapter.RTCSessionDescription(msg)
    @pc.createAnswer ((sdp) =>
      @pc.setLocalDescription sdp
      @sendSignal sdp), ((err) =>
      @log "Error creating answer", err), @sdpConstraints

  processAnswer: (msg) ->
    @log "Processing answer"
    @pc.setRemoteDescription new adapter.RTCSessionDescription(msg)

  addCandidate: (msg) ->
    candidate = new adapter.RTCIceCandidate
      sdpMLineIndex: msg.label
      candidate: msg.candidate
    @pc.addIceCandidate candidate

  disconnect: =>
    @log 'Disconnecting'
    @sendSignal type: 'bye'
    @close()
 
  close: =>
    @log "Closing #{@connType} connection"
    @trigger 'disconnected'
    @pc.close()

  log: (msg) =>
    console.debug "[#{@uuid}] #{msg}"

  sendSignal: (message) ->
    msg = 
      uuid:       @uuid
      connType:   @connType
      signal:     message
    @peer.signal msg



class DPC extends GenericPC
  constructor: (@uuid, @peer, @passive, @user) ->

    @log "New Data PC with #{@peer.get('screen_name')}"

    @connType = 'data'

    @sdpConstraints =
      mandatory:
        OfferToReceiveAudio: false
        OfferToReceiveVideo: false

    @init (pc) =>
      if @passive
        pc.ondatachannel = (event) =>
          @attachEvents(event.channel)
      else
        channel = pc.createDataChannel('vmux')#, {reliable: false})
        @attachEvents(channel)

  attachEvents: (channel) ->
    @datachannel = channel

    channel.onopen    = =>
      @log 'DataChannel connection opened'
      @trigger 'datachannelopen', @

    channel.onclose   = =>
      @log 'DataChannel connection closed'
      @trigger 'datachannelclose', @

    channel.onmessage = (event) =>
      @log "Message: #{event.data}"
      if event.data.match /\w|\d/
        msg = JSON.parse(event.data)
        if msg.type
          @log "Emitted: #{msg.type}"
          @trigger msg.type, msg.body

  sendMessage: (msg) =>
    @datachannel.send JSON.stringify(msg)

class VPC extends GenericPC
  constructor: (@uuid, @peer, @user) ->

    @log "New Video PC with #{@peer.get('screen_name')}"

    @connType = 'video'
    @audio    = true
    @video    = true

    @sdpConstraints =
      mandatory:
        OfferToReceiveAudio: true
        OfferToReceiveVideo: true

    @init (pc) =>
      pc.onaddstream      = @onRemoteStreamAdded
      pc.onremovestream   = @onRemoteStreamRemoved

  attachLocalStream: (stream) ->
    @pc.addStream stream

  onRemoteStreamAdded: (event) =>
    @log "Remote stream added."
    @trigger 'remoteStreamAdded', event.stream
    @trigger 'open'

  onRemoteStreamRemoved: (event) =>
    @log "Remote stream removed."
    @trigger 'remoteStreamRemoved'
    @trigger 'close'

  muteAudio: =>
    @audio = false
    track.enabled = false for track in localStream.getAudioTracks()
  
  unmuteAudio: =>
    @audio = true
    track.enabled = true for track in localStream.getAudioTracks()

  muteVideo: =>
    @video = false
    track.enabled = false for track in localStream.getVideoTracks()
  
  unmuteVideo: =>
    @video = true
    track.enabled = true for track in localStream.getVideoTracks()

  toggleAudio: ->
    if @audio then @muteAudio() else @unmuteAudio()

  toggleVideo: ->
    if @video then @muteVideo() else @unmuteVideo()

class APC extends GenericPC
  constructor: (@uuid, @peer, @user) ->

    @log "New Audio PC with #{@peer.get('screen_name')}"

    @connType = 'audio'
    @audio    = true

    @sdpConstraints =
      mandatory:
        OfferToReceiveAudio: true
        OfferToReceiveVideo: false

    @init (pc) =>
      pc.onaddstream      = @onRemoteStreamAdded
      pc.onremovestream   = @onRemoteStreamRemoved

  attachLocalStream: (stream) ->
    @pc.addStream stream

  onRemoteStreamAdded: (event) =>
    @log "Remote stream added."
    @trigger 'remoteStreamAdded', event.stream
    @trigger 'open'

  onRemoteStreamRemoved: (event) =>
    @log "Remote stream removed."
    @trigger 'remoteStreamRemoved'
    @trigger 'close'

  muteAudio: =>
    @audio = false
    track.enabled = false for track in localStream.getAudioTracks()
  
  unmuteAudio: =>
    @audio = true
    track.enabled = true for track in localStream.getAudioTracks()

  toggleAudio: ->
    if @audio then @muteAudio() else @unmuteAudio()

module.exports = [DPC, VPC, APC]
