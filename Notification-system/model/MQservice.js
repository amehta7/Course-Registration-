const amqp = require('amqplib/callback_api')

module.exports.subscribeQueue = (queue, cb) => {
  amqp.connect('amqp://localhost', function (error, connection) {
    if (error) throw error
    connection.createChannel(function (error1, channel) {
      if (error1) throw error1

      channel.prefetch(1)

      console.log('Waiting for messages in %s', queue)

      channel.assertQueue(queue)
      channel.consume(queue, function (msg) {
        var id = msg.content.toString()

        console.log('The message received is', id)
        console.log("Received '%s'", msg.content.toString())

        cb(msg)

        setTimeout(function () {
          channel.ack(msg)
        }, 1000)
      })
    })
  })
}
