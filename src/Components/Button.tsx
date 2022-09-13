interface buttonProps {
  content: string;
}

export default function MyButton(props: buttonProps) {
  return (
    <button
      onClick={() => {
        console.log("Button Clicked");
      }}
    >
      {props.content}
    </button>
  );
}
