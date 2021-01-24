
import axios from 'axios'
import React from 'react';

const useSearchInHowLongToBeat = (term:string):Array<any> => {
  
  const [result, setResult] = React.useState<Array<any>>([])

  React.useEffect(() => {
    const search = async (term:string) => {
      const result = await axios.get(`http://yagba.local:4200/hltb/search/?term=${term}`);
      setResult(result.data)
    }

    search(term);

  }, [term])

  return result
}

export default useSearchInHowLongToBeat