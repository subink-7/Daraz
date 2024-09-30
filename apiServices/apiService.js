import {
    AxiosInstanceFiles,
    axiosInstance,
  } from "@/apiServices/axiosInstances";
  
  export const getAllData = async (endpoint, headers) => {
      const result = await axiosInstance
        .get(endpoint)
        .then((res) => {
          return res;
        })
        .catch((err) => {
          return err;
        });
      return result;
    };
  
  export const storeData = async (endpoint, data, headers) => {
    if (headers) {
      const result = await axiosInstance
        .post(endpoint, data, { headers })
        .then((res) => {
          return res;
        })
        .catch((err) => {
          return err;
        });
      return result;
    } else {
      const result = await axiosInstance
        .post(endpoint, data)
        .then((res) => {
          return res;
        })
        .catch((err) => {
          return err;
        });
      return result;
    }
  };
  
  export const storeFormData = async (endpoint, data, headers) => {
    if (headers) {
      const result = await AxiosInstanceFiles.post(endpoint, data, { headers })
        .then((res) => {
          return res;
        })
        .catch((err) => {
          return err;
        });
      return result;
    } else {
      const result = await AxiosInstanceFiles.post(endpoint, data)
        .then((res) => {
          return res;
        })
        .catch((err) => {
          return err;
        });
      return result;
    }
  };
  
  export const updateData = async (endpoint, updatedData, headers) => {
    if (headers) {
      const result = await axiosInstance
        .patch(endpoint, updatedData, { headers })
        .then((res) => {
          return res;
        })
        .catch((err) => {
          return err;
        });
      return result;
    } else {
      const result = await axiosInstance
        .patch(endpoint, updatedData)
        .then((res) => {
          return res;
        })
        .catch((err) => {
          return err;
        });
      return result;
    }
  };
  
  export const updateFormData = async (endpoint, updatedData, headers) => {
    if (headers) {
      const result = await AxiosInstanceFiles.patch(endpoint, updatedData, {
        headers,
      })
        .then((res) => {
          return res;
        })
        .catch((err) => {
          return err;
        });
      return result;
    } else {
      const result = await AxiosInstanceFiles.patch(endpoint, updatedData)
        .then((res) => {
          return res;
        })
        .catch((err) => {
          return err;
        });
      return result;
    }
  };
  
  export const deleteData = async (endpoint, headers) => {
    if (headers) {
      const result = await axiosInstance
        .delete(endpoint, { headers })
        .then((res) => {
          return res;
        })
        .catch((err) => {
          return err;
        });
      return result;
    } else {
      const result = await axiosInstance
        .delete(endpoint)
        .then((res) => {
          return res;
        })
        .catch((err) => {
          return err;
        });
      return result;
    }
  };