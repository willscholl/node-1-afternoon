let messages = []
let id = 0;

module.exports = {
  create: (req, res) => {
    const {text, time} = req.body;
    id++
    messages.push({
      id: id,
      message: text,
      date: time
    })
    res.status(200).send(messages)
  },
  read: (req, res) => {
    res.status(200).send(messages)
  },
  update: (req, res) => {
    const {text, time} = req.body;
    const updateID = req.params.id;
    const messageIndex = messages.findIndex( message => message.id == updateID);
    let message = messages[ messageIndex ];
    console.log(text, time, updateID, messages[messageIndex])
    messages[ messageIndex ] = {
      id: updateID,
      text: text || message.text,
      time: time || message.time
    };
    res.status(200).send(messages)
  },
  delete: (req, res) => {
    const deleteID  = req.params.id;
    const index = messages.findIndex(message=>{
      return message.id == deleteID});
    messages.splice(index, 1)
    res.status(200).send(messages)
  }

}