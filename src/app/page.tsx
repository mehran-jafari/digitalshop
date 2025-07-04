export default function Home() {
  console.log('start base page');

  const renderName = () => {
    const name = 'Mehran';
    return <span>{name}</span>;
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div> Base Page </div>
      {renderName()}
    </div>
  );
}
