// styles
import { CustomHeader } from './header.style'
// libs
import { FiShoppingCart } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

import { signOut } from 'firebase/auth'
import { auth } from '../../../config/firebase.config'
import React, { useContext } from 'react'
import { Cartcontext } from '../../contexts/cart.context'
import { useSelector, useDispatch } from 'react-redux'

const Header = () => {
  const dispatch = useDispatch()
  const { isAuthenticated } = useSelector(
    (rootReducer: any) => rootReducer.userReducer
  )
  const { toogleCart, productCount } = useContext(Cartcontext)
  const navigate = useNavigate()

  const getHomePage = () => {
    navigate('/')
  }

  const getLoginPage = () => {
    navigate('/login')
  }
  const getExplorerPage = () => {
    navigate('/explorer')
  }
  const getCreateAcountPage = () => {
    navigate('/create-acount')
  }

  const handleLogoutUser = async () => {
    dispatch({ type: 'LOGOUT_USER' })
    await signOut(auth)
  }

  return (
    <CustomHeader>
      <div className="logo" onClick={getHomePage}>
        Cloting Store
      </div>
      <ul className="listHeader">
        <li className="itemListHeader" onClick={getExplorerPage}>
          Explorar
        </li>
        {!isAuthenticated && (
          <>
            <li className="itemListHeader" onClick={getLoginPage}>
              Login
            </li>
            <li className="itemListHeader" onClick={getCreateAcountPage}>
              Criar Conta
            </li>
          </>
        )}

        {isAuthenticated && (
          <>
            <li className="itemListHeader" onClick={handleLogoutUser}>
              sair
            </li>
          </>
        )}
        <li className="itemListHeader cart" onClick={toogleCart}>
          <FiShoppingCart />
          <span className="qtdCart">{productCount}</span>
        </li>
      </ul>
    </CustomHeader>
  )
}

export default Header
