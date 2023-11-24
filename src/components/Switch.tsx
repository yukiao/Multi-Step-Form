interface SwitchProps {
  checked: boolean;
  onChecked: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Switch = ({ checked, onChecked }: SwitchProps) => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={checked}
        onChange={onChecked}
      />
      <div className="w-11 h-6 bg-LIGHT_GRAY rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-WHITE after:border-WHITE after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-BLUE"></div>
    </label>
  );
};

export default Switch;
