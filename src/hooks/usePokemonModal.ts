import type { PokemonDetail } from "@redux/slices/pokemonModalSlices";
import { useSelector, useDispatch } from "react-redux";

// Redux
import {
  selectPokemonModalValue,
  closeModal,
  openModal,
} from "@redux/slices/pokemonModalSlices";

export const usePokemonModal = () => {
  const state = useSelector(selectPokemonModalValue);
  const dispatch = useDispatch();

  /**
   * open feed modal and set item to show
   */
  const handleOpenModal = (item: PokemonDetail) => {
    dispatch(openModal(item));
  };

  /**
   * close modal and set item to null
   */
  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return {
    state,
    handleOpenModal,
    handleCloseModal,
  };
};
