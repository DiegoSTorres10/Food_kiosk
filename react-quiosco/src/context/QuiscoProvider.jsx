import { createContext, useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import clienteAxios from '../config/axios'






const QuioscoContext = createContext()

//recibe un parametro de children
const QuioscoProvider = ({ children }) => {

    const [categorias, setCategorias] = useState([])
    const [categoriaActual, setCategoriasActual] = useState({})
    const [modal, setModal] = useState(false)
    const [producto, setProducto] = useState({})
    const [pedido, setPedido] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const nuevoTotal = pedido.reduce((total, producto) => (producto.precio * producto.cantidad) + total, 0)
        setTotal(nuevoTotal)
    }, [pedido]);

    const ObtenerCategorias = async () => {
        try {
            const { data } = await clienteAxios('/api/categorias')
            setCategorias(data.data)
            setCategoriasActual(data.data[0])
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        ObtenerCategorias();
    }, []);

    const handleClickCategoria = id => {

        const categoria = categorias.filter(categoria => categoria.id === id)[0]
        setCategoriasActual(categoria)

    }

    const handleClickModal = () => {
        setModal(!modal)
    }

    const handleSetProducto = producto => {
        setProducto(producto)
    }

    //lo que tengamos de lado izquierdo se va a eliminar del objeto
    const handleAgregarPedido = ({ categoria_id, ...producto }) => {

        //se recorre si existe el mismo producto cambia por el pedidoEstatus y si no lo que tengas
        if (pedido.some(pedidoState => pedidoState.id === producto.id)) {
            const productoEdicion = pedido.map(pedidoState => pedidoState.id === producto.id ? producto : pedidoState)
            setPedido(productoEdicion)
            toast.success('Actualizado correctamente')


        } else {
            setPedido([...pedido, producto])
            toast.success('Agregado al pedido')
        }
    }

    const handleEditarCantidad = id => {
        const productosActualizar = pedido.filter(producto => producto.id === id)[0]

        setProducto(productosActualizar)
        setModal(!modal)
    }

    const handleEliminarProductoPedido = id => {
        const pedidoActualizar = pedido.filter(producto => producto.id !== id)
        setPedido(pedidoActualizar)
        toast.success('Eliminado el pedido')
    }

    const handleSubmitNuevaOrden = async ( logout ) => {
        const token = localStorage.getItem('AUTH_TOKEN')
        try {
            const { data } = await clienteAxios.post('/api/pedidos', {
                total,
                productos: pedido.map(producto => {
                    return {
                        id: producto.id,
                        cantidad: producto.cantidad
                    }
                })
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            toast.success(data.message);
            setTimeout(() => {
                setPedido([])
            }, 1000);

            // Cerrar la sesión del usuario
            setTimeout(() => {
                localStorage.removeItem('AUTH_TOKEN');
                logout();
            }, 5000);
        } catch (error) {
            console.log(error);
        }
    }

    const handleClickCompletarPedido = async id => {
        const token = localStorage.getItem('AUTH_TOKEN')
        try {
            await clienteAxios.put(`/api/pedidos/${id}`, null, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    const handleClickProductoAgotado = async id => {
        const token = localStorage.getItem('AUTH_TOKEN')
        try {
            
            await clienteAxios.put(`/api/productos/${id}`, null, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (

        //Utilizar el mentodo el createCOntext con el metodo Provider 
        //luego en el value iran las funciones/estados/variables
        <QuioscoContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria,
                modal,
                handleClickModal,
                producto,
                handleSetProducto,
                pedido,
                handleAgregarPedido,
                handleEditarCantidad,
                handleEliminarProductoPedido,
                total,
                handleSubmitNuevaOrden,
                handleClickCompletarPedido,
                handleClickProductoAgotado
            }}
        >
            {children}

        </QuioscoContext.Provider>
    )
}

export {
    QuioscoProvider
}

//para utilizarlo el quisco context para madnar los paramtros
export default QuioscoContext