"use client";
import { } from 'ai/react';
import { useChat } from 'ai/react';
import GPTLogo from './components/GPTLogo';

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="pt-4 pb-32">
      {messages.map((message) => {
        return (
          <div key={message.id} className={`border-t border-black/10 ${message.role === 'assistant' && 'bg-gray-50'}`}>
            <div className="max-w-3xl mx-auto py-6 flex">
              {message.role === 'assistant' && <GPTLogo />}
              <span className="ml-3">{message.content}</span>
            </div>
          </div>
        )
      })}

      <form className="fixed inset-x-0 bottom-10" onSubmit={handleSubmit}>
        <input
          className="max-w-3xl shadow-xl w-full mx-auto py-8 flex h-10 rounded-md border-input bg-background px3 text-sm ring-offset-background padding:20px"
          value={input}
          onChange={handleInputChange}
          placeholder="Send a message" />
      </form>
    </div>
  )
}

      // {messages.map((message) => {
      //   return (
      //     <span key={message.id}>
      //       {message.role}: {message.content}
      //     </span>
      //   )
      // })}
      // {/* <form onSubmit={handleSubmit}>
      // <input
      //   value={input}
      //   onChange={handleInputChange}
      //   placeholder="enter a message" />
      // </form> */}