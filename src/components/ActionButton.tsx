interface ActionButtonsProps {
  showBackButton: boolean;
  onBackClick: () => void;
  onNextClick: () => void;
  nextButtonTitle: string;
}
const ActionButtons = ({
  showBackButton,
  onBackClick,
  onNextClick,
  nextButtonTitle,
}: ActionButtonsProps) => {
  return (
    <>
      {showBackButton && (
        <button
          onClick={onBackClick}
          className="text-COOL_GRAY font-medium py-2 rounded-md active:text-BLUE"
        >
          Go back
        </button>
      )}
      <button
        onClick={onNextClick}
        className="ml-auto bg-BLUE text-WHITE py-2 px-4 rounded-md active:bg-PASTEL_BLUE"
      >
        {nextButtonTitle}
      </button>
    </>
  );
};

export default ActionButtons;
