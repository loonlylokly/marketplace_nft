'use client';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';

import { Button } from '@/shared/ui/button/Button';
import { BurgerMenuIcon } from '@/shared/ui/icons/BurgerMenuIcon';
import { MenuHeader } from '@/widgets/header/ui/menuHeader/MenuHeader';

import style from './MobileHeader.module.css';

export const MobileHeader = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <Button className={style.burger} appearance="text" size="sm">
        <BurgerMenuIcon />
      </Button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className={style.dialog_overlay}>
        <Dialog.Content className={style.dialog_content}>
          <MenuHeader />
          <Dialog.Close asChild>
            <Button
              className={style.icon_button}
              appearance="text"
              size="sm"
              aria-label="Close"
            >
              <Cross2Icon />
            </Button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog.Portal>
  </Dialog.Root>
);
