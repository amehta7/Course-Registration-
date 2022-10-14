const amqp = require('amqplib/callback_api')

module.exports.publishQueue = (queue, msg) => {
  amqp.connect('amqp://localhost', function (error, connection) {
    if (error) throw error
    connection.createChannel(function (error1, channel) {
      if (error1) throw error1
      console.log(queue, msg)
      channel.assertQueue(queue)
      channel.sendToQueue(queue, Buffer.from(msg), {
        persistent: true,
      })

      console.log("Sent '%s'", msg)
    })
    setTimeout(function () {
      connection.close()
      process.exit(0)
    }, 500)
  })
}
