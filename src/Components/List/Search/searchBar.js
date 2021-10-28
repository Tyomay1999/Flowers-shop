import React, { useEffect, useRef, useState } from 'react';
import searchBarStyles from './searchBar.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { setFilterDataByFlowerName } from "../../../Redux/filterReducer";

const SearchBar = () => {
    // const products = useSelector(state => state?.products.products,)
    const darkOrLight = useSelector(state => state?.changeMode.darkOrLight)
    const dispatch = useDispatch()
    const [searchIsOpen, setSearchIsOpen] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const animation = {
        initial: {
            opacity: 0,
        },
        in: {
            opacity: 1,
            x: 0
        },
        out: {
            opacity: 0,
            x: '100%'
        },
    }
    const animation1 = {
        initial: {
            opacity: 0.3,
        },
        in: {
            opacity: 1,
            x: 0
        },
        out: {
            opacity: 0,
            x: '-55%'
        },
    }
    const refUseEffectWarrningSolver = useRef()
    const useEffectWarrningSolver = () => {
        dispatch(setFilterDataByFlowerName(searchValue))
    }
    refUseEffectWarrningSolver.current = useEffectWarrningSolver
    useEffect(() => {
        refUseEffectWarrningSolver.current()
    },[searchValue])
    return (
        <motion.div
            initial='out'
            animate='in'
            exit='out'
            transition={{ duration: 1 }}
            variants={animation}
            className={searchIsOpen ? searchBarStyles.main1 : searchBarStyles.main}>
            <div
                onClick={() => setSearchIsOpen(!searchIsOpen)}
                className={!searchIsOpen ?
                    darkOrLight ? `${searchBarStyles.openContainer} ${searchBarStyles.dark}` : `${searchBarStyles.openContainer} ${searchBarStyles.light}`
                    : darkOrLight ? `${searchBarStyles.closeContainer} ${searchBarStyles.dark}` : `${searchBarStyles.closeContainer} ${searchBarStyles.light}`}
            >
                <div className={searchBarStyles.searchIcone}><SearchIcon /></div>
                <span className={darkOrLight ? searchBarStyles.span1 : searchBarStyles.span}><ArrowBackIosIcon /></span>

            </div>
            {
                searchIsOpen && <motion.div
                    initial='out'
                    animate='in'
                    exit='out'
                    transition={{ duration: 1 }}
                    variants={animation1}
                    className={searchIsOpen ? searchBarStyles.openContainer1 : searchBarStyles.closeContainer1}
                >
                    {
                        searchValue && <CloseIcon
                            onClick={() => setSearchValue('')}
                            className={searchBarStyles.clearInput}
                        />
                    }
                    <label
                        className={searchValue ? searchBarStyles.label1 : searchBarStyles.label}
                        htmlFor='search'
                    >Flower name</label>
                    <input
                        className={searchValue ? searchBarStyles.input1 : searchBarStyles.input}
                        onChange={(e) => setSearchValue(e.target.value)}
                        id='search'
                        type='text'
                        value={searchValue}
                    />
                </motion.div>
            }
        </motion.div>
    )
}

export default SearchBar