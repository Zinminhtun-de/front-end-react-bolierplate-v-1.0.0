import tw from 'twin.macro';

const H1 = tw.h1`text-3xl font-bold underline`;

function App() {
  return (
    <div>
      <H1 className="text-3xl font-bold underline">Hello world!</H1>
    </div>
  );
}

export default App;
