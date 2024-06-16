export default function LyricList({lyrics}) {
  return (
    <ul className="collection">
      {lyrics.map(({id, content}) => (
        <li key={id} className="collection-item">
          {content}
        </li>
      ))}
    </ul>
  );
}
