import {useState} from 'react';

export default function useManageModalHook() {
  const [visible, setVisible] = useState(false);

  function closeModal() {
    setVisible(false);
  }
  function openModal() {
    setVisible(true);
  }

  return {closeModal, openModal, visible};
}
