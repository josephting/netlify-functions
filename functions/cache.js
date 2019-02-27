const ttl = 60 * 1000 // 1 minute in miliseconds

let lastUpdate = 0
let data = {}

exports.handler = (event, context, callback) => {
  if (Object.keys(data).length === 0 || Date.now() - lastUpdate >= ttl) {
    console.log('Updating data...')
    let now = Date.now()
    data.lastUpdate = now
    lastUpdate = now
  }

  callback(null, {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}
