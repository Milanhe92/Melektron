export default function QuantumComments({ postId }: { postId: string }) {
  return (
    <div className="quantum-comments mt-16">
      <h3 className="text-2xl font-bold">Kvantni Komentari</h3>
      <p className="text-gray-400">Ovde dolaze tvoji komentari za post: {postId}</p>
    </div>
  );
}