const Mailgun = require('mailgun-js')

function MailSender (config) {
if (!new.target) {
    return new MailSender(config)
}

_mailgun = new Mailgun({
    apiKey: "4b1aa784-f5ea229f",
    domain: "sandboxd8bd75e5a7d94145b6e5d58a259f9142.mailgun.org"
})

this.send = async (to, content) => {
    return _mailgun.messages()
    .send({
        from: 'matiKumos@wsb.projekt.com',
        to: to,
        subject: 'Feedmail ',
        text: 'Twoje wiadomośći RSS',
        html: content,
    })
}
}

module.exports = MailSender
