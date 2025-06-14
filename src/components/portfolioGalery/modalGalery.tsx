'use client';
import * as React from 'react';
import { styled } from '@mui/system';
import { Portal } from '@mui/base/Portal';
import { FocusTrap } from '@mui/base/FocusTrap';
import { unstable_useModal as useModal } from '@mui/base/unstable_useModal';
import Fade from '@mui/material/Fade';
import Image from 'next/image';
import { forwardRef } from 'react';
import { useMediaMatches } from '../hooks/mediaMatchesHook';

interface UseModalProps {
  openModal: boolean;
  chosenImage: string;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ModalGalery({ openModal, chosenImage, setOpenModal }: UseModalProps) {
  const handleClose = () => setOpenModal(false);

  const { width, height } = useMediaMatches({
    mediaPoints: [
      { maxWidth: 500, width: 320, height: 550 },
      { maxWidth: 1000, width: 450, height: 700 },
    ],
    baseWidth: 530,
    baseHeight: 700,
  });

  return (
    <div>
      <Modal open={openModal} onClose={handleClose} closeAfterTransition>
        <Fade in={openModal}>
          <ModalContent sx={style}>
            <div
              className="absolute top-[10px] right-[10px] text-xl  px-1 rounded-md hover:bg-gray-300 transition duration-300 opacity-75 cursor-pointer"
              onClick={handleClose}
            >
              &#x2717;
            </div>
            <Image
              src={chosenImage}
              alt={'image portfolio'}
              width={width}
              height={height}
              priority={false}
              loading="lazy"
              unoptimized
            />
          </ModalContent>
        </Fade>
      </Modal>
    </div>
  );
}

interface ModalProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: React.ReactElement<any>;
  closeAfterTransition?: boolean;
  container?: Element | (() => Element | null) | null;
  disableAutoFocus?: boolean;
  disableEnforceFocus?: boolean;
  disableEscapeKeyDown?: boolean;
  disablePortal?: boolean;
  disableRestoreFocus?: boolean;
  disableScrollLock?: boolean;
  hideBackdrop?: boolean;
  keepMounted?: boolean;
  onClose?: (event: object, reason: 'backdropClick' | 'escapeKeyDown') => void;
  onTransitionEnter?: () => void;
  onTransitionExited?: () => void;
  open: boolean;
}

const Modal = React.forwardRef(function Modal(props: ModalProps, forwardedRef: React.ForwardedRef<HTMLElement>) {
  const {
    children,
    closeAfterTransition = false,
    container,
    disableAutoFocus = false,
    disableEnforceFocus = false,
    disableEscapeKeyDown = false,
    disablePortal = false,
    disableRestoreFocus = false,
    disableScrollLock = false,
    hideBackdrop = false,
    keepMounted = false,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onClose,
    open,
    ...other
  } = props;

  const propsWithDefaults = {
    ...props,
    closeAfterTransition,
    disableAutoFocus,
    disableEnforceFocus,
    disableEscapeKeyDown,
    disablePortal,
    disableRestoreFocus,
    disableScrollLock,
    hideBackdrop,
    keepMounted,
  };

  const { getRootProps, getBackdropProps, getTransitionProps, portalRef, isTopModal, exited, hasTransition } = useModal({
    ...propsWithDefaults,
    rootRef: forwardedRef,
  });

  const childProps: {
    onEnter?: () => void;
    onExited?: () => void;
    tabIndex?: string;
  } = {};
  if (children.props.tabIndex === undefined) {
    childProps.tabIndex = '-1';
  }

  // It's a Transition like component
  if (hasTransition) {
    const { onEnter, onExited } = getTransitionProps();
    childProps.onEnter = onEnter;
    childProps.onExited = onExited;
  }

  const rootProps = {
    ...other,
    ...getRootProps(other),
  };

  const backdropProps = {
    open,
    ...getBackdropProps(),
  };

  if (!keepMounted && !open && (!hasTransition || exited)) {
    return null;
  }

  return (
    <Portal ref={portalRef} container={container} disablePortal={disablePortal}>
      <CustomModalRoot {...rootProps}>
        {!hideBackdrop ? <CustomModalBackdrop {...backdropProps} /> : null}
        <FocusTrap
          disableEnforceFocus={disableEnforceFocus}
          disableAutoFocus={disableAutoFocus}
          disableRestoreFocus={disableRestoreFocus}
          isEnabled={isTopModal}
          open={open}
        >
          {React.cloneElement(children, childProps)}
        </FocusTrap>
      </CustomModalRoot>
    </Portal>
  );
});

const Backdrop = forwardRef<HTMLDivElement, { open?: boolean }>((props, ref) => {
  const { open, ...other } = props;
  return (
    <Fade in={open}>
      <div ref={ref} {...other} />
    </Fade>
  );
});
Backdrop.displayName = 'Backdrop';

const style = {
  margin: 'auto auto',
};

const ModalContent = styled('div')`
  position: relative;
  display: flex;
  flex-direction: column;
  outline: 0;
`;

const CustomModalRoot = styled('div')`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
`;

const CustomModalBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.8);
  -webkit-tap-highlight-color: transparent;
`;
