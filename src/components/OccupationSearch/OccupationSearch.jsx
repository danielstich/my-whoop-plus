import React from 'react';

export default function OccupationSearch() {

  const careers = ["nurse", "naturopath", ""]

  return (
    <div>
        <form action="">
            <label htmlFor="careerInput">Search</label>
            <input type="text" name="careerInput" id="careerInput" />
            <button>Submit</button>

            {/* this is an NPM library called react-autocomplete, it's supposed to simplify creating auto-complete text inputs - not working on my end but could be useful */}
            {/* <Autocomplete
              getItemValue={(item) => item.label}
              items={[
                { label: 'apple' },
                { label: 'banana' },
                { label: 'pear' }
              ]}
              renderItem={(item, isHighlighted) =>
                <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                  {item.label}
                </div>
              }
              value={value}
              onChange={(e) => value = e.target.value}
              onSelect={(val) => value = val}
            /> */}
        </form>
    </div>
  );
}
