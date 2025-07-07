// components/QuantumComments.tsx
import React from 'react'

export default function QuantumComments() {
  return <div>Quantum Comments Placeholder</div>
}
'use client';

import { useState, useEffect } from 'react';
import { useTonWallet } from '@tonconnect/ui-react';

export default function QuantumComments({ postId }: { postId: string }) {
  const wallet = useTonWallet();
  const [comments, setComments] = useState<any[]>([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    // Učitaj komentare iz blockchaina
    const fetchComments = async () => {
      const response = await fetch(`/api/comments?post=${postId}`);
      const data = await response.json();
      setComments(data.comments);
    };
    
    fetchComments();
  }, [postId]);

  const submitComment = async () => {
    if (!newComment.trim() || !wallet) return;
    
    // Pošalji komentar sa wallet potpisom
    const response = await fetch('/api/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        postId,
        content: newComment,
        address: wallet.account.address,
        signature: await wallet.signMessage(newComment)
      })
    });
    
    if (response.ok) {
      setComments([...comments, {
        content: newComment,
        author: wallet.account.address.slice(0, 8) + '...',
        timestamp: new Date().toISOString()
      }]);
      setNewComment('');
    }
  };

  return (
    <section className="quantum-comments mt-20">
      <h2 className="text-3xl font-bold mb-6">Kvantna Diskusija</h2>
      
      <div className="space-y-6">
        {comments.map((comment, index) => (
          <div key={index} className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm">
            <div className="flex items-start space-x-4">
              <div className="bg-purple-500 rounded-full w-10 h-10 flex items-center justify-center">
                <span className="font-bold">{comment.author.charAt(0)}</span>
              </div>
              <div>
                <div className="flex items-center">
                  <span className="font-bold">{comment.author}</span>
                  <span className="text-gray-400 text-sm ml-4">
                    {new Date(comment.timestamp).toLocaleDateString()}
                  </span>
                </div>
                <p className="mt-2">{comment.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Dodajte kvantni komentar..."
          className="w-full p-4 rounded-lg bg-gray-800 border border-purple-500/30 focus:border-cyan-400 outline-none"
          rows={4}
          disabled={!wallet}
        />
        
        {wallet ? (
          <button
            onClick={submitComment}
            className="mt-4 px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Objavi komentar
          </button>
        ) : (
          <div className="mt-4 text-center">
            <p className="text-gray-400">
              Povežite TON novčanik da biste učestvovali u diskusiji
            </p>
          </div>
        )}
      </div>
    </section>
  );
}