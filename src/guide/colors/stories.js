import colors from '@/assets/stylesheets/modules/colors.module.scss';

export default {
  title: 'Guides'
};


const AllColors = () => {
  return Object.keys(colors).map((color, index) => {
    let colorStyle = {
      backgroundColor: colors[color],
      width: '40px',
      height: '40px',
      borderRadius: '100%',
      marginLeft: "10px"
    }
    let itemStyle = {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(max-content, 1fr))',
      gridGap: '20px',
      justifyContent: 'flex-end',
      borderRight: '1px solid rgb(230 229 229)',
      paddingLeft: '15px',
      paddingRight: '15px'
    }

    return (
      <div style={itemStyle} key={index}>
        <div style={colorStyle}></div>
        <div className="m-top-5">
          <div className="m-bottom-5">{color}</div>
          <div>{colors[color]}</div>
        </div>
      </div>
    )
  })
}

export const Colors = () => {
  return (
    <div className="flex">
      <AllColors/>
    </div>
  )
}