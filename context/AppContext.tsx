import { createContext, Dispatch, SetStateAction } from 'react';

type AppContextType = {
    isModalOpen: boolean;
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
};

const AppContext = createContext<AppContextType>({
    isModalOpen: false,
    setIsModalOpen: () => null,
});

export default AppContext;
