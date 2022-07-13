// Yo widget. Click to make it longer
const { widget } = figma;
const { useSyncedState, Text } = widget;

function Yo() {
  const [count, setCount] = useSyncedState('count', 2);
  return (
    <Text
      onClick={() => {
        setCount(count + 1);
      }}
    >
      t{Array(count).join('o')}
    </Text>
  );
}

widget.register(Yo);
