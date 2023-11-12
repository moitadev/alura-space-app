import styled from 'styled-components';
import Image from '../Gallery/Image';

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(2px);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

const StyledDialog = styled.dialog`
  position: absolute;
  top: 294px;
  background-color: transparent;
  border: 0;
  width: 90%;
  display: flex;
  justify-content: center;
`;

const CloseButton = styled.button`
  position: relative;
  top: 20px;
  right: 40px;
  background-color: transparent;
  border: 0;
  z-index: 2;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.2);
    transition: all 0.3s ease;
  }
`;

const ZoomModal = ({ photo, onClosed }) => {
  return (
    <>
      {photo && (
        <>
          <Overlay />
          <StyledDialog open={!!photo} onClose={onClosed}>
            <Image photo={photo} expanded={true} />
            <form method="dialog">
              <CloseButton>x</CloseButton>
            </form>
          </StyledDialog>
        </>
      )}
    </>
  );
};

export default ZoomModal;
