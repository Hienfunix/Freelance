const ctx = document.getElementById('myChart');
const pushData = (month,weight1,weight2,weight3,weight4) => {
    return({month,weight1,weight2,weight3,weight4}) 
}
const data1 = []

for(i=0; i < 61; i++){
    if(i==0){
        data1.push(pushData('Sinh',30,20,10,5))
    } else if(i < 10) {
        data1.push(pushData(`0${i}`,30,20,10,5))
    } else{
        data1.push(pushData(i,30,20,10,5))
    }
}


  const data2= {
    labels: data1.map(column => column.month),
    datasets: [
        {
            label: 'Suy dinh dưỡng nặng',
            backgroundColor: 'rgba(251,127,129,1)',
            borderColor: 'rgb(171,117,117,)',
            data: data1.map(data => data.weight4),
            fill: true,
        },
        {
            label: 'Suy dinh dưỡng vừa',
            backgroundColor: 'rgba(250,165,137,1)',
            borderColor: 'rgb(250,165,137)',
            data: data1.map(data => data.weight3),
            fill: true
        },
        {
            label: 'Cân nặng bình thường',
            backgroundColor: 'rgba(198,255,250,1)',
            borderColor: 'rgb(216,176,181)',
            data: data1.map(data => data.weight2),
            fill: true
        },
        {
            label: 'Cân nặng cao so với tuổi',
            backgroundColor: 'rgba(250,251,183,1)',
            borderColor: 'rgb(217,198,183)',
            data: data1.map(data => data.weight1),
            fill: true,
            yAxisID: 'weight',
            xAxisID: 'abc',
        },
    ],
    
  }
//   config.options.scales.x

const config =  {
    type:'line',
    data: data2,
    options: {

        indexAxis: 'x',
        scales: {
            y: {
                min: 0,
                max: 30,
                grid:{
                    color: 'black',
                    lineWidth: 2,
                    tickLength:1,
                    z:99
                    
                },
                ticks: {
                    major:true,
                    stepSize: 1
                },
                title: {
                    display: true,
                    text: 'Cân nặng (kg)',
                    color: '#911',
                    font: {
                        family: 'Comic Sans MS',
                        size: 20,
                        weight: 'bold',
                        lineHeight: 1.2,
                    },
                },
            },
            x: {
                min: 0,
                max: 60,
                alignToPixels: true,
                grid:{
                    color: 'black',
                    lineWidth: 2,
                    tickLength:1,
                    z:99
                },
                ticks: {
                    stepSize: 1,
                    maxRotation: 0,
                    autoSkip: false,
                    font: {
                        size: 12
                    }
                },
                title: {
                    display: true,
                    text: 'Tháng tuổi',
                    color: '#911',
                    font: {
                        family: 'Comic Sans MS',
                        size: 20,
                        weight: 'bold',
                        lineHeight: 1.2,
                    },
                },
            },
            abc:{
                min:0,
                max:6,
                position:'bottom'
            },
            weight: {
                min: 0,
                max: 30,
                position: 'right',
                ticks: {
                    stepSize: 2,
                    maxRotation: 0,
                    autoSkip: false,
                }, 
                grid: {
                    color: 'black',
                    lineWidth: 4,
                    tickLength:1,
                },
            },
            maintainAspectRatio: false,
    },

    plugins: {
        tooltip:{
            callbacks:{
                beforeTitle(context){
                    return `Độ tuổi: ${context[0].label} tháng`
                },
                title(context){
                    return `Cân nặng: ${context[0].raw} kg`
                },
                afterTitle(context){
                    return `=========`
                },
                label(context){
                    return `Trạng thái: ${context.dataset.label}`
                },

            },
        }

    }
}}
const chart1 = new Chart(ctx,config)

// Chart.Interaction.modes.pointIndex = function(chart,e,options,useFinalPosition){
//     const pointItems = Chart.Interaction.modes.point(chart,e,{axis: 'xy',intersect:true}, useFinalPosition)
//     console.log(harct)
//     if(!pointItems.length) {
//         return Chart.Interaction.modes.index(chart,e,{axis:xy,intersect:true},useFinalPosition)
//     } else{
//         return pointItems
//     }
    
// }