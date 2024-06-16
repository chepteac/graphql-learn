export default function LyricList({lyrics}) {
  const renderLyrics = () =>
    lyrics.map(({id, content}) => (
      <li key={id} className="collection-item">
        {content}
      </li>
    ));

  return <ul className="collection">LyricList</ul>;
}
