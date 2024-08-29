type ActionButtonProps = {
  swipeMode: () => void
  openModal: () => void
  mode: 'DEFAULT' | 'ANSWERED'
}

export const ActionButtons = ({
  swipeMode,
  openModal,
  mode
}: ActionButtonProps) => {
  return (
    <div className="flex relative z-5 gap-8">
      <button
        style={{ boxShadow: '4px 4px 0 black' }}
        onClick={swipeMode}
        className="bg-[#F1D3FF] transition-colors transition-duration-300 ease-in-out hover:bg-[#eabefe] px-12 font-semibold text-2xl py-4 border-black border-4"
      >
        {mode === 'DEFAULT' ? 'Ya contestadas' : 'Por contestar'}
      </button>
      <button
        style={{ boxShadow: '4px 4px 0 black' }}
        onClick={openModal}
        className="bg-[#FFB4B4] hover:bg-[#fda1a1] transition-colors transition-duration-300 ease-in-out px-12 font-semibold text-2xl py-4 border-black border-4"
      >
        Vaciar
      </button>
    </div>
  )
}
