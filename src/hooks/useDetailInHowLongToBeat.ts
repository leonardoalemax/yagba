
import axios from 'axios'
import React from 'react';

const useDetailInHowLongToBeat = (id:string):Array<any> => {
  
  const [result, setResult] = React.useState<Array<any>>([])

  React.useEffect(() => {
    const detail = async (id:string) => {
      const result = await axios.get(`http://yagba.local:4200/hltb/detail/?id=${id}`);
      setResult(result.data)
    }

    detail(id);

  }, [id])

  return result
}

export default useDetailInHowLongToBeat