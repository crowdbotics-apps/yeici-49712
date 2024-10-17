import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_yvcvd_list = createAsyncThunk(
  "yvcvds/api_v1_yvcvd_list",
  async payload => {
    const response = await apiService.api_v1_yvcvd_list(payload)
    return response.data
  }
)
export const api_v1_yvcvd_create = createAsyncThunk(
  "yvcvds/api_v1_yvcvd_create",
  async payload => {
    const response = await apiService.api_v1_yvcvd_create(payload)
    return response.data
  }
)
export const api_v1_yvcvd_retrieve = createAsyncThunk(
  "yvcvds/api_v1_yvcvd_retrieve",
  async payload => {
    const response = await apiService.api_v1_yvcvd_retrieve(payload)
    return response.data
  }
)
export const api_v1_yvcvd_update = createAsyncThunk(
  "yvcvds/api_v1_yvcvd_update",
  async payload => {
    const response = await apiService.api_v1_yvcvd_update(payload)
    return response.data
  }
)
export const api_v1_yvcvd_partial_update = createAsyncThunk(
  "yvcvds/api_v1_yvcvd_partial_update",
  async payload => {
    const response = await apiService.api_v1_yvcvd_partial_update(payload)
    return response.data
  }
)
export const api_v1_yvcvd_destroy = createAsyncThunk(
  "yvcvds/api_v1_yvcvd_destroy",
  async payload => {
    const response = await apiService.api_v1_yvcvd_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const yvcvdsSlice = createSlice({
  name: "yvcvds",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_yvcvd_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_yvcvd_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_yvcvd_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_yvcvd_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_yvcvd_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_yvcvd_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_yvcvd_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_yvcvd_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_yvcvd_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_yvcvd_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_yvcvd_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_yvcvd_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_yvcvd_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_yvcvd_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_yvcvd_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_yvcvd_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_yvcvd_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_yvcvd_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_yvcvd_list,
  api_v1_yvcvd_create,
  api_v1_yvcvd_retrieve,
  api_v1_yvcvd_update,
  api_v1_yvcvd_partial_update,
  api_v1_yvcvd_destroy,
  slice: yvcvdsSlice
}
