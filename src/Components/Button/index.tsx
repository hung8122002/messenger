import ClickMe from '~/common';
console.log(ClickMe);

function Button() {
  return <button onClick={ClickMe}>Click</button>;
}

export default Button;
