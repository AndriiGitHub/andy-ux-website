'use strict';

class MessageGeneratorService {
  constructor () {}

  generateMessageText ({message, first, last, company, email}) {
    let text = `New request from: ${email}. `;

    if(message) {
      text += `Message: ${message}. `;
    }

    if(first && last) {
      text += `From: ${first} ${last}. `;
    }

    if(first && !last) {
      text += `From: ${first}. `;
    }

    if(!first && last) {
      text += `From: ${last}. `;
    }

    if(company) {
      text += `Company: ${company}.`;
    }

    return text;
  }
}

module.exports = new MessageGeneratorService();
