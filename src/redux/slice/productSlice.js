import { createAsyncThunk ,createSlice} from "@reduxjs/toolkit"
import axios from 'axios'



export const fetchProducts=createAsyncThunk('products/fetchProducts',async()=>{
    const result = await axios.get("https://rs-server-xati.onrender.com/restaurants");
    localStorage.setItem("allProducts",JSON.stringify(result.data))
    return result.data;
    
})




const productSlice=createSlice({

    name:'products',
    initialState:{
        allProductsDummy:[],
        allProducts:[],
        loading:false,
        error:""
    },
    reducers:{
        searchProducts:(state,action)=>{
            state.allProducts=state.allProductsDummy.filter(item=>item.neighborhood.toLowerCase().includes(action.payload))

        }

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.allProducts=action.payload
            state.allProductsDummy=action.payload
            state.loading=false
            state.error=""
        })
        builder.addCase(fetchProducts.pending,(state,action)=>{
            state.allProducts=[]
            state.allProductsDummy=[]
            state.loading=true
            state.error=""
        })
        builder.addCase(fetchProducts.rejected,(state,action)=>{
            state.allProducts=[]
            state.allProductsDummy=[]
            state.loading=false
            state.error="Api call failed please try again"
        })
    
     }
})
 


export const {searchProducts}=productSlice.actions
export default productSlice.reducer