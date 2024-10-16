function Header(props) {
  let { num, arr } = props;
  let { children } = props;
  console.log(num);
  return (
    <>
      {children}
      {num.name}
      {props.email}
      <br />
      {props.arr[0]}
      <h1>Welcome</h1>
      <h2>haha</h2>
    </>
  );
}
export { Header };
