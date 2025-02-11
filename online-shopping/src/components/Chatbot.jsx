import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, X, Minimize2, Maximize2 } from 'lucide-react';
import './Chatbot.css';

const ModernChatbot = () => {
    const [messages, setMessages] = useState([
      {
        text: "Hi! I'm LUCY your AI assistant. How can I help you today?",
        sender: 'bot',
        id: Date.now()
      }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(true);
    
    const messagesEndRef = useRef(null);
  
    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };
  
    useEffect(() => {
      scrollToBottom();
    }, [messages]);
  
    // Knowledge base for the chatbot
    const knowledge = {
      greetings: {
        patterns: ['hello', 'hi', 'hey', 'howdy', 'greetings'],
        responses: [
          "Hello! How can I assist you today?",
          "Hi there! What can I help you with?",
          "Hey! What's on your mind?"
        ]
      },
      about: {
        patterns: ['who are you', 'what are you', 'tell me about yourself'],
        responses: [
          "I'm an AI chatbot designed to help answer your questions and assist with various tasks.",
          "I'm your friendly AI assistant, here to help you with information and support."
        ]
      },
      capabilities: {
        patterns: ['what can you do', 'help', 'features', 'abilities'],
        responses: [
          "I can help you with various tasks including answering questions, providing information, and assisting with general inquiries. Feel free to ask me anything!",
          "I'm capable of understanding and responding to a wide range of questions. Try asking me about different topics!"
        ]
      },
      thanks: {
        patterns: ['thank you', 'thanks', 'appreciate it'],
        responses: [
          "You're welcome! Let me know if you need anything else.",
          "Glad I could help! Feel free to ask more questions.",
          "Anytime! Don't hesitate to reach out if you need more assistance."
        ]
      }
    };
  
    const findResponse = (input) => {
      const lowercaseInput = input.toLowerCase();
      
      for (const category in knowledge) {
        if (knowledge[category].patterns.some(pattern => lowercaseInput.includes(pattern))) {
          return knowledge[category].responses[
            Math.floor(Math.random() * knowledge[category].responses.length)
          ];
        }
      }
      
      return "I'm not sure I understand. Could you rephrase that or ask something else?";
    };
  
    const simulateTyping = async (response) => {
      setIsTyping(true);
      // Simulate typing delay based on response length
      await new Promise(resolve => setTimeout(resolve, Math.min(response.length * 20, 2000)));
      setIsTyping(false);
      
      setMessages(prev => [...prev, {
        text: response,
        sender: 'bot',
        id: Date.now()
      }]);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!input.trim()) return;
  
      // Add user message
      const userMessage = {
        text: input,
        sender: 'user',
        id: Date.now()
      };
      setMessages(prev => [...prev, userMessage]);
      setInput('');
  
      // Get and add bot response
      const response = findResponse(input);
      await simulateTyping(response);
    };
  
    const TypingIndicator = () => (
        <div className="typing-indicator">
          <div className="typing-indicator-dot" />
          <div className="typing-indicator-dot" />
          <div className="typing-indicator-dot" />
        </div>
    );
  
  return (
    <div className={`chatbot-container ${isChatOpen ? '' : 'hidden'}`}>
      {!isChatOpen ? (
        <button
          onClick={() => setIsChatOpen(true)}
          className="chatbot-button"
        >
          <Bot className="w-6 h-6" />
        </button>
      ) : (
        <div className="chatbot-wrapper">
          {/* Chat Header */}
          <div className="chatbot-header">
            <div className="flex items-center space-x-2">
              <Bot className="w-6 h-6" />
              <span className="font-medium">AI Assistant</span>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="chatbot-header-button"
              >
                {isMinimized ? (
                  <Maximize2 className="w-5 h-5" />
                ) : (
                  <Minimize2 className="w-5 h-5" />
                )}
              </button>
              <button
                onClick={() => setIsChatOpen(false)}
                className="chatbot-header-button"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Chat Messages */}
          {!isMinimized && (
            <>
              <div className="chatbot-messages">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`chatbot-message ${
                      message.sender === 'user'
                        ? 'chatbot-message-user'
                        : 'chatbot-message-bot'
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          message.sender === 'user'
                            ? 'bg-blue-100'
                            : 'bg-gray-100'
                        }`}
                      >
                        {message.sender === 'user' ? (
                          <User className="w-5 h-5 text-blue-600" />
                        ) : (
                          <Bot className="w-5 h-5 text-gray-600" />
                        )}
                      </div>
                      <div className="chatbot-message-content">
                        {message.text}
                      </div>
                    </div>
                  </div>
                ))}
                {isTyping && <TypingIndicator />}
                <div ref={messagesEndRef} />
              </div>

              {/* Chat Input */}
              <form onSubmit={handleSubmit} className="chatbot-input-area">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    className="chatbot-input"
                  />
                  <button
                    type="submit"
                    className="chatbot-send-button"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      )}
      <div className="chatbot-backdrop" onClick={() => setIsChatOpen(false)} />
    </div>
  );
};

export default ModernChatbot;
      
 

     

