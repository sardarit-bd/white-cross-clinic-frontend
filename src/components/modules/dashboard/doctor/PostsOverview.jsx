export default function PostsOverview() {
  const posts = [
    { title: "Understanding Heart Failure", date: "Jan 12, 2025" },
    { title: "How to Improve Sleep Quality", date: "Jan 09, 2025" },
    { title: "The Importance of Regular Checkups", date: "Jan 05, 2025" },
  ];

  return (
    <div className="bg-white p-5 rounded-xl shadow-[var(--shadowCard)]">
      <h2 className="font-semibold mb-4 text-[var(--textDark)]">
        Recent Articles
      </h2>

      <ul className="space-y-3">
        {posts.map((post, i) => (
          <li
            key={i}
            className="p-3 border border-[var(--borderLight)] rounded-lg hover:bg-[var(--brandColorLight)] transition cursor-pointer"
          >
            <h3 className="font-medium">{post.title}</h3>
            <p className="text-sm text-[var(--textLight)]">{post.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
