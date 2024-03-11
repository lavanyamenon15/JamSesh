# JamSesh

## Inspiration
In today's digital landscape, community forums play a pivotal role for Gen Z by providing vital spaces where they can connect, share ideas, and seek support across a wide array of interests, ultimately shaping their identities and fostering meaningful online connections.

## What it does
JamSesh is a dynamic jamboard designed for forums dedicated to discussing ideas and projects. It functions as a virtual space where users can visually collaborate, brainstorm, and organize their thoughts. This platform fosters engaging conversations within the community, facilitating discussion and idea generation by encouraging users to contribute their own insights and concepts.

## How we built it
We developed the web app using React.js for the front-end and utilized a json-server to create a lightweight database for mock data.

We also integrated chat functionality by leveraging several endpoints of the Cohere API. We utilized the 'chat' endpoint to simulate other users participating in the jam session, creating a more natural and authentic demo environment for our product.

In addition, we offer users the option to enhance their brainstorming sessions with AI assistance. Our AI assistant, 'Jammy,' monitors the chat by concatenating subsequent messages until they reach a length of 500 characters. At this point, we utilize the 'summarize' endpoint of the Cohere API to summarize the recent conversation's progression. We then feed the summarized output into the 'generate' endpoint to generate a concise idea that Jammy can propose to the chat, thereby enriching and enhancing the brainstorming experience rather than driving it.

## Challenges we ran into
One of the challenges we encountered was incorporating Cohere AI as a chatbot that is involved in the community forum conversations like another member without dominating or driving the conversation completely. We wanted to differentiate Jammy from other common chat bots like chat gpt. In order to do this, we have Jammy monitor, analyze, and enhance the conversation rather than completely drive it.

## Accomplishments that we're proud of
We are thrilled to integrate the Cohere API into our project in a manner that empowers it to both facilitate community forums and seamlessly participate in them as our chatbot “Jammy”, akin to any other community member.

## What we learned
We acquired valuable experience in integrating APIs into our project, learning how to tailor their features to align with our goals and serve the specific functions we aimed to incorporate.

## What's next for JamSesh
Next, JamSesh will introduce a community forum page where forums with a minimum number of active members will automatically transition to the jamboard page for enhanced collaboration and engagement. We would also like to have several location filters.

## Built With
- React.js
- Cohere API
- JSON Server
- Figma
- HTML
- CSS
