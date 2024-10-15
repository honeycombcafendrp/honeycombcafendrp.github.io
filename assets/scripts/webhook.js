async function sendform(ev) {
    ev.preventDefault();
    const Question1 = document
      .getElementById('Question1').value;
      const Question2 = document
      .getElementById('Question2').value;
      const Question3 = document
      .getElementById('Question3').value;
    const webhookBody = {
      embeds: [{
        title: 'Contact request',
        fields: [{
            name: 'What is your name?',
            value: Question1
        },
        {
            name: 'What is your phone number?',
            value: Question2
        },
        {
            name: 'What are you reaching out about?',
            value: Question3
        },
        ],
      }],
    };
    const webhookUrl = 'https://discord.com/api/webhooks/1295051173560193188/u-C1rqFWiUmWnR3ClrG5HMv0k2IieLVMKa0yjfOX4hpIgUcCZ0x_ROmYhuXHib3D6NZV';
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(webhookBody),
    });
    location.reload()
  }