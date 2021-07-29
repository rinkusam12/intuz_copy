export function alphabetArr(arr) {
    let data = arr.reduce((r, e) => {
 
        // get first letter of name of current element
        let alphabet = e.heading[0];
       
        // if there is no property in accumulator with this letter create it
        if (!r[alphabet]) r[alphabet] = { alphabet, record: [e] }
       
        // if there is push current element to children array for that letter
        else r[alphabet].record.push(e);
       
        // return accumulator
        return r;
      }, {});
      return Object.values(data);
}