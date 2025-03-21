<script>
import highlightjs from '@/components/plugins/Highlightjs.vue';
import apexchart, { getApexConfiguration } from '@/components/plugins/Apexcharts.vue';
import axios from 'axios';
import { useAppVariableStore } from '@/stores/app-variable';
import { ScrollSpy } from 'bootstrap';

const appVariable = useAppVariableStore();

export default {
	methods: {
		generateBubbleChartData(baseval, count, yrange) {
			var i = 0;
			var series = [];
			while (i < count) {
				var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;;
				var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
				var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

				series.push([x, y, z]);
				baseval += 86400000;
				i++;
			}
			return series;
		},
		generateHeatmapData(count, yrange) {
			var i = 0;
			var series = [];
			while (i < count) {
				var x = 'w' + (i + 1).toString();
				var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

				series.push({
					x: x,
					y: y
				});
				i++;
			}
			return series;
		},
		getChart1Options() {
			return {
				chart: {
					type: 'line',
					shadow: {
						enabled: true,
						color: 'rgba('+ appVariable.color.componentColorRgb + ', .5)',
						top: 18,
						left: 7,
						blur: 10,
						opacity: 1
					},
					toolbar: { show: false }
				},
				title: {
					text: 'Average High & Low Temperature',
					align: 'center',
					color: appVariable.color.componentColor
				},
				colors: [appVariable.color.blue, appVariable.color.teal],
				dataLabels: {
					enabled: true,
					background: {
						enabled: true,
						foreColor: appVariable.color.white,
						padding: 4,
						borderRadius: 2,
						borderWidth: 0,
						borderColor: appVariable.color.gray500,
						opacity: 0.9,
						dropShadow: {
							enabled: false,
							top: 1,
							left: 1,
							blur: 1,
							color: appVariable.color.black,
							opacity: 0.45
						}
					},
				},
				stroke: { curve: 'smooth', width: 3 },
				grid: {
					row: { colors: ['rgba('+ appVariable.color.componentColorRgb + ', .1)', 'transparent'], opacity: 0.5 }
				},
				markers: { size: 4 },
				xaxis: { 
					categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
					labels: {
						style: {
							colors: appVariable.color.componentColor
						}
					}
				},
				yaxis: { 
					min: 5, 
					max: 40,
					labels: {
						style: {
							colors: appVariable.color.componentColor
						}
					}
				},
				legend: {
					show: true,
					position: 'top',
					offsetY: -10,
					horizontalAlign: 'right',
					floating: true,
					labels: {
						colors: appVariable.color.componentColor
					}
				}
			};
		},
		getChart2Options() {
			return {
				chart: { type: 'bar' },
				title: {
					text: 'Profit & Margin Chart',
					align: 'center'
				},
				plotOptions: {
					bar: {
						horizontal: false,
						columnWidth: '55%',
						endingShape: 'rounded'	
					},
				},
				dataLabels: { enabled: false },
				stroke: {
					show: true,
					width: 2,
					colors: ['transparent']
				},
				colors: [appVariable.color.gray600, appVariable.color.indigo, appVariable.color.gray300],
				xaxis: { 
					categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
					labels: {
						style: {
							colors: appVariable.color.componentColor
						}
					}
				},
				yaxis: {
					title: {
						text: '$ (thousands)',
						style: {
							color: appVariable.color.bodyColor,
							fontSize: '12px',
							fontFamily: appVariable.font.family,
							fontWeight: 'bold'
						}
					},
					labels: {
						style: {
							colors: appVariable.color.componentColor
						}
					}
				},
				fill: { opacity: 1 },
				tooltip: {
					y: {
						formatter: function (val) {
							return "$ " + val + " thousands"
						}
					}
				},
				legend: {
					labels: {
						colors: appVariable.color.componentColor
					}
				}
			};
		},
		getChart3Options() {
			return {
				chart: { type: 'area' },
				dataLabels: { enabled: false },
				stroke: { curve: 'smooth', width: 3 },
				colors: [appVariable.color.pink, appVariable.color.gray600],
				xaxis: {
					type: 'datetime',
					categories: ['2025-09-19T00:00:00', '2025-09-19T01:30:00', '2025-09-19T02:30:00', '2025-09-19T03:30:00', '2025-09-19T04:30:00', '2025-09-19T05:30:00', '2025-09-19T06:30:00'],
					axisBorder: {
						show: true,
						color: appVariable.color.gray300,
						height: 1,
						width: '100%',
						offsetX: 0,
						offsetY: -1
					},
					axisTicks: {
						show: true,
						borderType: 'solid',
						color: appVariable.color.gray300,
						height: 6,
						offsetX: 0,
						offsetY: 0
					},
					labels: {
						style: {
							colors: appVariable.color.componentColor
						}
					}
				},
				yaxis: {
					labels: {
						style: {
							colors: appVariable.color.componentColor
						}
					}
				},
				tooltip: {
					x: { format: 'dd/MM/yy HH:mm' }
				},
				legend: {
					labels: {
						colors: appVariable.color.componentColor
					}
				}
			};
		},
		getChart4Options() {
			return {
				chart: { type: 'bar' },
				plotOptions: {
					bar: {
						horizontal: true,
						dataLabels: { position: 'top' }
					}  
				},
				dataLabels: {
					enabled: true,
					offsetX: -6,
					style: { fontSize: '12px', colors: [appVariable.color.bodyColor] }
				},
				colors: [appVariable.color.orange, appVariable.color.gray500],
				stroke: { show: false },
				legend: {
					labels: {
						colors: appVariable.color.componentColor
					}
				},
				yaxis: {
					labels: {
						style: {
							colors: appVariable.color.componentColor
						}
					}
				},
				xaxis: {
					categories: [2019, 2020, 2021, 2022, 2023, 2024, 2025],
					axisBorder: {
						show: true,
						color: appVariable.color.gray300,
						height: 1,
						width: '100%',
						offsetX: 0,
						offsetY: -1
					},
					axisTicks: { show: true, borderType: 'solid', color: appVariable.color.gray300,	height: 6, offsetX: 0, offsetY: 0 },
					labels: {
						style: {
							colors: appVariable.color.componentColor
						}
					}
				}
			};
		},
		getChart5Options() {
			return {
				chart: { type: 'line', stacked: false },
				dataLabels: { enabled: false },
				stroke: { width: [0, 0, 3] },
				colors: [appVariable.color.blue, appVariable.color.teal, appVariable.color.orange],
				title: { text: 'XYZ - Stock Analysis (2017 - 2025)', align: 'left', offsetX: 110 },
				xaxis: {
					categories: [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
					axisBorder: { show: true, color: appVariable.color.gray300, height: 1, width: '100%', offsetX: 0, offsetY: -1 },
					axisTicks: { show: true, borderType: 'solid', color: appVariable.color.gray300, height: 6, offsetX: 0, offsetY: 0 },
					labels: {
						style: {
							colors: appVariable.color.componentColor
						}
					}
				},
				yaxis: [
					{ 
						axisTicks: { show: true, }, 
						axisBorder: { show: true, color: appVariable.color.borderColor }, 
						labels: { style: { color: appVariable.color.blue } },
						title: { text: "Income (thousand crores)", style: { color: appVariable.color.bodyColor } }, 
						tooltip: { enabled: true }
					},
					{
						seriesName: 'Income', opposite: true,
						axisTicks: { show: true, },
						axisBorder: { show: true, color: appVariable.color.borderColor },
						labels: { style: { color: appVariable.color.bodyColor } },
						title: { text: "Operating Cashflow (thousand crores)", style: { color: appVariable.color.bodyColor } },
					}, 
					{
						seriesName: 'Revenue',
						opposite: true,
						axisTicks: { show: true },
						axisBorder: { show: true, color: appVariable.color.borderColor },
						labels: { style: { color: appVariable.color.bodyColor } },
						title: { text: "Revenue (thousand crores)", style: { color: appVariable.color.bodyColor } }
					}
				],
				tooltip: { fixed: { enabled: true, position: 'topLeft', offsetY: 30, offsetX: 60 } },
				legend: { 
					horizontalAlign: 'left', 
					offsetX: 40,
					labels: {
						colors: appVariable.color.componentColor
					}
				}
			};
		},
		getChart6Options() {
			return {
				chart: { type: 'candlestick' },
				title: { text: 'CandleStick Chart', align: 'left' },
				xaxis: {
					type: 'datetime',
					axisBorder: { show: true, color: appVariable.color.gray300, height: 1, width: '100%', offsetX: 0, offsetY: -1 },
					axisTicks: { show: true, borderType: 'solid', color: appVariable.color.gray300, height: 6, offsetX: 0, offsetY: 0 },
					labels: { style: { colors: appVariable.color.componentColor } }
				},
				yaxis: { tooltip: { enabled: true }, labels: { style: { colors: appVariable.color.componentColor } } },
				plotOptions: { candlestick: { colors: { upward: appVariable.color.teal, downward: appVariable.color.red } } },
				legend: { labels: { colors: appVariable.color.componentColor } }
			};
		},
		getChart7Options() {
			return {
				chart: { type: 'bubble' },
				dataLabels: { enabled: false },
				colors: [appVariable.color.blue, appVariable.color.orange, 'rgba('+ appVariable.color.gray500Rgb + ', .5)', appVariable.color.pink],
				fill: { opacity: 0.8 },
				title: { text: 'Simple Bubble Chart' },
				xaxis: { tickAmount: 12, type: 'category', labels: { style: { colors: appVariable.color.componentColor } } },
				yaxis: { max: 70, labels: { style: { colors: appVariable.color.componentColor } } },
				legend: { labels: { colors: appVariable.color.componentColor } }
			};
		},
		getChart8Options() {
			return {
				chart: {
					type: 'scatter',
					zoom: { enabled: true, type: 'xy' }
				},
				colors: [appVariable.color.blue, appVariable.color.orange, 'rgba('+ appVariable.color.gray500Rgb + ', .5)'],
				xaxis: {
					tickAmount: 10,
					labels: {
						formatter: function(val) { return parseFloat(val).toFixed(1) },
						colors: appVariable.color.componentColor
					}
				},
				yaxis: { tickAmount: 7, labels: { style: { colors: appVariable.color.componentColor } } },
				legend: { labels: { colors: appVariable.color.componentColor } }
			};
		},
		getChart9Options() {
			return {
				chart: { type: 'heatmap' },
				dataLabels: { enabled: false },
				colors: [appVariable.color.blue],
				title: { text: 'HeatMap Chart (Single color)' },
				legend: { labels: { colors: appVariable.color.componentColor } },
				xaxis: { labels: { style: { colors: appVariable.color.componentColor } } },
				yaxis: { labels: { style: { colors: appVariable.color.componentColor } } }
			};
		},
		getChart10Options() {
			return {
				chart: { type: 'pie' },
				dataLabels: { dropShadow: { enabled: false, top: 1, left: 1, blur: 1, opacity: 1 } },
				stroke: { show: false },
				colors: [ 'rgba('+ appVariable.color.pinkRgb +', .75)',  'rgba('+ appVariable.color.orangeRgb +', .75)',  'rgba('+appVariable.color.blueRgb +', .75)', 'rgba('+ appVariable.color.gray500Rgb + ', .5)',  'rgba('+appVariable.color.indigoRgb +', .75)'],
				labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
				title: { text: 'HeatMap Chart (Single color)' },
				legend: { labels: { colors: appVariable.color.componentColor } }
			};
		},
		getChart11Options() {
			return {
				chart: { type: 'radialBar' },
				plotOptions: {
					radialBar: {
						offsetY: -10,
						startAngle: 0,
						endAngle: 270,
						hollow: { margin: 5, size: '30%', background: 'transparent', image: undefined },
						track: { background: 'rgba('+ appVariable.color.gray500Rgb + ', .25)' },
						dataLabels: { name: { show: false }, value: { show: false } }
					}
				},
				colors: [appVariable.color.cyan, appVariable.color.blue, appVariable.color.indigo, appVariable.color.gray300],
				labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
				legend: {
					show: true,
					floating: true,
					position: 'left',
					offsetX: 140,
					offsetY: 15,
					labels: { useSeriesColors: true, colors: appVariable.color.componentColor },
					markers: { size: 0 },
					formatter: function(seriesName, opts) {
						return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
					},
					itemMargin: { horizontal: 1 }
				}
			};
		},
		getChart12Options() {
			return {
				chart: { type: 'radar' },
				labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
				plotOptions: {
					radar: {
						size: 140,
						polygons: {
							strokeColors: 'rgba('+ appVariable.color.gray500Rgb +', .25)',
							strokeWidth: 1,
							connectorColors: 'rgba('+ appVariable.color.gray500Rgb +', .25)',
							fill: {
								colors: ['rgba('+appVariable.color.gray300Rgb +', .25)', 'rgba('+ appVariable.color.gray500Rgb + ', .25)']
							}
						}
					}
				},
				title: { text: 'Radar with Polygon Fill' },
				colors: [appVariable.color.blue],
				markers: {
					size: 4,
					colors: [appVariable.color.blue],
					strokeColor: appVariable.color.blue,
					strokeWidth: 2,
				},
				tooltip: { y: { formatter: function(val) { return val } } },
				yaxis: {
					tickAmount: 7,
					labels: { formatter: function(val, i) { return (i % 2 === 0) ? val : ''; } }
				},
				legend: { labels: { colors: appVariable.color.componentColor } }
			};
		},
	},
	data() {
		return {
			renderComponent: true,
			code1: '',
			code2: '',
			code3: '',
			code4: '',
			code5: '',
			code6: '',
			code7: '',
			code8: '',
			code9: '',
			code10: '',
			code11: '',
			code12: '',
			chart1: {
				height: 350,
				series: [
					{ name: 'High - 2025', data: [28, 29, 33, 36, 32, 32, 33] }, 
					{ name: 'Low - 2025', data: [12, 11, 14, 18, 17, 13, 13] }
				],
				options: this.getChart1Options()
			},
			chart2: {
				height: 350,
				series: [
					{ name: 'Net Profit', data: [44, 55, 57, 56, 61, 58, 63, 60, 66] }, 
					{ name: 'Revenue', data: [76, 85, 101, 98, 87, 105, 91, 114, 94] }, 
					{ name: 'Free Cash Flow', data: [35, 41, 36, 26, 45, 48, 52, 53, 41] }
				],
				options: this.getChart2Options()
			},
			chart3: {
				height: 350,
				series: [
					{ name: 'series1', data: [31, 40, 28, 51, 42, 109, 100] },
					{ name: 'series2', data: [11, 32, 45, 32, 34, 52, 41] }
				],
				options: this.getChart3Options()
			},
			chart4: {
				height: 350,
				series: [
					{ data: [44, 55, 41, 64, 22, 43, 21] },
					{ data: [53, 32, 33, 52, 13, 44, 32] }
				],
				options: this.getChart4Options()
			},
			chart5: {
				height: 350,
				series: [
					{ name: 'Income', type: 'column', data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6] }, 
					{ name: 'Cashflow', type: 'column', data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5] }, 
					{ name: 'Revenue', type: 'line', data: [20, 29, 37, 36, 44, 45, 50, 58] }
				],
				options: this.getChart5Options()
			},
			chart6: {
				height: 350,
				series: [{
					data: [
						{ x: new Date(1538778600000), y: [6629.81, 6650.5, 6623.04, 6633.33] }, 
						{ x: new Date(1538780400000), y: [6632.01, 6643.59, 6620, 6630.11] }, 
						{ x: new Date(1538782200000), y: [6630.71, 6648.95, 6623.34, 6635.65] }, 
						{ x: new Date(1538784000000), y: [6635.65, 6651, 6629.67, 6638.24] }, 
						{ x: new Date(1538785800000), y: [6638.24, 6640, 6620, 6624.47] }, 
						{ x: new Date(1538787600000), y: [6624.53, 6636.03, 6621.68, 6624.31] }, 
						{ x: new Date(1538789400000), y: [6624.61, 6632.2, 6617, 6626.02] }, 
						{ x: new Date(1538791200000), y: [6627, 6627.62, 6584.22, 6603.02] }, 
						{ x: new Date(1538793000000), y: [6605, 6608.03, 6598.95, 6604.01] }, 
						{ x: new Date(1538794800000), y: [6604.5, 6614.4, 6602.26, 6608.02] }, 
						{ x: new Date(1538796600000), y: [6608.02, 6610.68, 6601.99, 6608.91] }, 
						{ x: new Date(1538798400000), y: [6608.91, 6618.99, 6608.01, 6612] }, 
						{ x: new Date(1538800200000), y: [6612, 6615.13, 6605.09, 6612] }, 
						{ x: new Date(1538802000000), y: [6612, 6624.12, 6608.43, 6622.95] }, 
						{ x: new Date(1538803800000), y: [6623.91, 6623.91, 6615, 6615.67] }, 
						{ x: new Date(1538805600000), y: [6618.69, 6618.74, 6610, 6610.4] }, 
						{ x: new Date(1538807400000), y: [6611, 6622.78, 6610.4, 6614.9] }, 
						{ x: new Date(1538809200000), y: [6614.9, 6626.2, 6613.33, 6623.45] }, 
						{ x: new Date(1538811000000), y: [6623.48, 6627, 6618.38, 6620.35] }, 
						{ x: new Date(1538812800000), y: [6619.43, 6620.35, 6610.05, 6615.53] }, 
						{ x: new Date(1538814600000), y: [6615.53, 6617.93, 6610, 6615.19] }, 
						{ x: new Date(1538816400000), y: [6615.19, 6621.6, 6608.2, 6620] }, 
						{ x: new Date(1538818200000), y: [6619.54, 6625.17, 6614.15, 6620] }, 
						{ x: new Date(1538820000000), y: [6620.33, 6634.15, 6617.24, 6624.61] }, 
						{ x: new Date(1538821800000), y: [6625.95, 6626, 6611.66, 6617.58] }, 
						{ x: new Date(1538823600000), y: [6619, 6625.97, 6595.27, 6598.86] }, 
						{ x: new Date(1538825400000), y: [6598.86, 6598.88, 6570, 6587.16] }, 
						{ x: new Date(1538827200000), y: [6588.86, 6600, 6580, 6593.4] }, 
						{ x: new Date(1538829000000), y: [6593.99, 6598.89, 6585, 6587.81] }, 
						{ x: new Date(1538830800000), y: [6587.81, 6592.73, 6567.14, 6578] }, 
						{ x: new Date(1538832600000), y: [6578.35, 6581.72, 6567.39, 6579] }, 
						{ x: new Date(1538834400000), y: [6579.38, 6580.92, 6566.77, 6575.96] }, 
						{ x: new Date(1538836200000), y: [6575.96, 6589, 6571.77, 6588.92] }, 
						{ x: new Date(1538838000000), y: [6588.92, 6594, 6577.55, 6589.22] }, 
						{ x: new Date(1538839800000), y: [6589.3, 6598.89, 6589.1, 6596.08] }, 
						{ x: new Date(1538841600000), y: [6597.5, 6600, 6588.39, 6596.25] }, 
						{ x: new Date(1538843400000), y: [6598.03, 6600, 6588.73, 6595.97] }, 
						{ x: new Date(1538845200000), y: [6595.97, 6602.01, 6588.17, 6602] }, 
						{ x: new Date(1538847000000), y: [6602, 6607, 6596.51, 6599.95] }, 
						{ x: new Date(1538848800000), y: [6600.63, 6601.21, 6590.39, 6591.02] }, 
						{ x: new Date(1538850600000), y: [6591.02, 6603.08, 6591, 6591] }, 
						{ x: new Date(1538852400000), y: [6591, 6601.32, 6585, 6592] }, 
						{ x: new Date(1538854200000), y: [6593.13, 6596.01, 6590, 6593.34] }, 
						{ x: new Date(1538856000000), y: [6593.34, 6604.76, 6582.63, 6593.86] }, 
						{ x: new Date(1538857800000), y: [6593.86, 6604.28, 6586.57, 6600.01] }, 
						{ x: new Date(1538859600000), y: [6601.81, 6603.21, 6592.78, 6596.25] }, 
						{ x: new Date(1538861400000), y: [6596.25, 6604.2, 6590, 6602.99] }, 
						{ x: new Date(1538863200000), y: [6602.99, 6606, 6584.99, 6587.81] }, 
						{ x: new Date(1538865000000), y: [6587.81, 6595, 6583.27, 6591.96] }, 
						{ x: new Date(1538866800000), y: [6591.97, 6596.07, 6585, 6588.39] }, 
						{ x: new Date(1538868600000), y: [6587.6, 6598.21, 6587.6, 6594.27] }, 
						{ x: new Date(1538870400000), y: [6596.44, 6601, 6590, 6596.55] }, 
						{ x: new Date(1538872200000), y: [6598.91, 6605, 6596.61, 6600.02] }, 
						{ x: new Date(1538874000000), y: [6600.55, 6605, 6589.14, 6593.01] }, 
						{ x: new Date(1538875800000), y: [6593.15, 6605, 6592, 6603.06] }, 
						{ x: new Date(1538877600000), y: [6603.07, 6604.5, 6599.09, 6603.89] }, 
						{ x: new Date(1538879400000), y: [6604.44, 6604.44, 6600, 6603.5] }, 
						{ x: new Date(1538881200000), y: [6603.5, 6603.99, 6597.5, 6603.86] }, 
						{ x: new Date(1538883000000), y: [6603.85, 6605, 6600, 6604.07] }, 
						{ x: new Date(1538884800000), y: [6604.98, 6606, 6604.07, 6606] }]
				}],
				options: this.getChart6Options()
			},
			chart7: {
				height: 350,
				series: [
					{ name: 'Bubble1', data: this.generateBubbleChartData(new Date('11 Feb 2025 GMT').getTime(), 20, { min: 10, max: 60 }) },
					{ name: 'Bubble2', data: this.generateBubbleChartData(new Date('11 Feb 2025 GMT').getTime(), 20, { min: 10, max: 60 }) },
					{ name: 'Bubble3', data: this.generateBubbleChartData(new Date('11 Feb 2025 GMT').getTime(), 20, { min: 10, max: 60 }) },
					{ name: 'Bubble4', data: this.generateBubbleChartData(new Date('11 Feb 2025 GMT').getTime(), 20, { min: 10, max: 60 }) }
				],
				options: this.getChart7Options()
			},
			chart8: {
				height: 350,
				series: [
					{ name: "SAMPLE A", data: [[16.4, 5.4],[21.7, 2],[25.4, 3],[19, 2],[10.9, 1],[13.6, 3.2],[10.9, 7.4],[10.9, 0],[10.9, 8.2],[16.4, 0],[16.4, 1.8],[13.6, 0.3],[13.6, 0],[29.9, 0],[27.1, 2.3],[16.4, 0],[13.6, 3.7],[10.9, 5.2],[16.4, 6.5],[10.9, 0],[24.5, 7.1],[10.9, 0],[8.1, 4.7],[19, 0],[21.7, 1.8],[27.1, 0],[24.5, 0],[27.1, 0],[29.9, 1.5],[27.1, 0.8],[22.1, 2]] }, 
					{ name: "SAMPLE B", data: [[36.4, 13.4],[1.7, 11],[5.4, 8],[9, 17],[1.9, 4],[3.6, 12.2],[1.9, 14.4],[1.9, 9],[1.9, 13.2],[1.4, 7],[6.4, 8.8],[3.6, 4.3],[1.6, 10],[9.9, 2],[7.1, 15],[1.4, 0],[3.6, 13.7],[1.9, 15.2],[6.4, 16.5],[0.9, 10],[4.5, 17.1],[10.9, 10],[0.1, 14.7],[9, 10],[12.7, 11.8],[2.1, 10],[2.5, 10],[27.1, 10],[2.9, 11.5],[7.1, 10.8],[2.1, 12]] }, 
					{ name: "SAMPLE C", data: [[21.7, 3],[23.6, 3.5],[24.6, 3],[29.9, 3],[21.7, 20],[23, 2],[10.9, 3],[28, 4],[27.1, 0.3],[16.4, 4],[13.6, 0],[19, 5],[22.4, 3],[24.5, 3],[32.6, 3],[27.1, 4],[29.6, 6],[31.6, 8],[21.6, 5],[20.9, 4],[22.4, 0],[32.6, 10.3],[29.7, 20.8],[24.5, 0.8],[21.4, 0],[21.7, 6.9],[28.6, 7.7],[15.4, 0],[18.1, 0],[33.4, 0],[16.4, 0]] }
				],
				options: this.getChart8Options()
			},
			chart9: {
				height: 350,
				series: [
					{ name: 'Metric1', data: this.generateHeatmapData(18, {	min: 0, max: 90 }) }, 
					{ name: 'Metric2', data: this.generateHeatmapData(18, {	min: 0, max: 90 }) }, 
					{ name: 'Metric3', data: this.generateHeatmapData(18, {	min: 0, max: 90 }) }, 
					{ name: 'Metric4', data: this.generateHeatmapData(18, {	min: 0, max: 90 }) }, 
					{ name: 'Metric5', data: this.generateHeatmapData(18, {	min: 0, max: 90 }) }, 
					{ name: 'Metric6', data: this.generateHeatmapData(18, {	min: 0, max: 90 }) }, 
					{ name: 'Metric7', data: this.generateHeatmapData(18, {	min: 0, max: 90 }) },
					{ name: 'Metric8', data: this.generateHeatmapData(18, {	min: 0, max: 90 }) }, 
					{ name: 'Metric9', data: this.generateHeatmapData(18, {	min: 0, max: 90 }) }
				],
				options: this.getChart9Options()
			},
			chart10: {
				height: 365,
				series: [44, 55, 13, 43, 22],
				options: this.getChart10Options()
			},
			chart11: {
				height: 350,
				series: [76, 67, 61, 90],
				options: this.getChart11Options()
			},
			chart12: {
				height: 320,
				series: [{
					name: 'Series 1',
					data: [20, 100, 40, 30, 50, 80, 33],
				}],
				options: this.getChart12Options()
			}
		}
	},
	components: {
		apexchart: apexchart,
		highlightjs: highlightjs
	},
	mounted() {
		axios.get('/assets/data/chart/apexchart-code-1.json').then((response) => {
			this.code1 = response.data;
		});
		axios.get('/assets/data/chart/apexchart-code-2.json').then((response) => {
			this.code2 = response.data;
		});
		axios.get('/assets/data/chart/apexchart-code-3.json').then((response) => {
			this.code3 = response.data;
		});
		axios.get('/assets/data/chart/apexchart-code-4.json').then((response) => {
			this.code4 = response.data;
		});
		axios.get('/assets/data/chart/apexchart-code-5.json').then((response) => {
			this.code5 = response.data;
		});
		axios.get('/assets/data/chart/apexchart-code-6.json').then((response) => {
			this.code6 = response.data;
		});
		axios.get('/assets/data/chart/apexchart-code-7.json').then((response) => {
			this.code7 = response.data;
		});
		axios.get('/assets/data/chart/apexchart-code-8.json').then((response) => {
			this.code8 = response.data;
		});
		axios.get('/assets/data/chart/apexchart-code-9.json').then((response) => {
			this.code9 = response.data;
		});
		axios.get('/assets/data/chart/apexchart-code-10.json').then((response) => {
			this.code10 = response.data;
		});
		axios.get('/assets/data/chart/apexchart-code-11.json').then((response) => {
			this.code11 = response.data;
		});
		axios.get('/assets/data/chart/apexchart-code-12.json').then((response) => {
			this.code12 = response.data;
		});
		
		new ScrollSpy(document.body, {
			target: '#sidebar-bootstrap',
			offset: 200
		})
	},
	created() {
		this.emitter.on('theme-reload', (evt) => {
			this.renderComponent = false;
			
			this.$nextTick(() => {
				Apex = getApexConfiguration();
				this.chart1.options = this.getChart1Options();
				this.chart2.options = this.getChart2Options();
				this.chart3.options = this.getChart3Options();
				this.chart4.options = this.getChart4Options();
				this.chart5.options = this.getChart5Options();
				this.chart6.options = this.getChart6Options();
				this.chart7.options = this.getChart7Options();
				this.chart8.options = this.getChart8Options();
				this.chart9.options = this.getChart9Options();
				this.chart10.options = this.getChart10Options();
				this.chart11.options = this.getChart11Options();
				this.chart12.options = this.getChart12Options();
				this.renderComponent = true;
			});
    })
	}
}
</script>
<template>
	<div v-if="renderComponent">
		<!-- BEGIN breadcrumb -->
		<ol class="breadcrumb float-xl-end">
			<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
			<li class="breadcrumb-item"><a href="javascript:;">Chart</a></li>
			<li class="breadcrumb-item active">Apex Chart</li>
		</ol>
		<!-- END breadcrumb -->
		<!-- BEGIN page-header -->
		<h1 class="page-header">Apex Chart <small>header small text goes here...</small></h1>
		<!-- END page-header -->
		<!-- BEGIN row -->
		<div class="row">
			<!-- BEGIN col-6 -->
			<div class="col-xl-6">
				<!-- BEGIN panel -->
				<panel>
					<panel-header>
						<panel-title>Line Chart</panel-title>
						<panel-toolbar />
					</panel-header>
					<panel-body class="p-0">
						<p class="mb-0 p-3">
							JavaScript Line Charts are a typical pictorial representation that depicts trends and behaviors over time. It is represented by a series of data points connected with a line.
						</p>
						<div class="pe-10px">
							<apexchart :height="chart1.height" :options="chart1.options" :series="chart1.series"></apexchart>
						</div>
					</panel-body>
					<highlightjs :code="code1" />
				</panel>
				<!-- END panel -->
			</div>
			<!-- END col-6 -->
			<!-- BEGIN col-6 -->
			<div class="col-xl-6">
				<!-- BEGIN panel -->
				<panel>
					<panel-header>
						<panel-title>Column Chart</panel-title>
						<panel-toolbar />
					</panel-header>
					<panel-body class="p-0">
						<p class="mb-0 p-3">
							A JavaScript Column Chart, just like other bar graphs uses vertical bars to display data and is used to compare values across categories.
						</p>
						<div class="ps-10px pe-10px">
							<apexchart :height="chart2.height" :options="chart2.options" :series="chart2.series"></apexchart>
						</div>
					</panel-body>
					<highlightjs :code="code2" />
				</panel>
				<!-- END panel -->
			</div>
			<!-- END col-6 -->
			<!-- BEGIN col-6 -->
			<div class="col-xl-6">
				<!-- BEGIN panel -->
				<panel>
					<panel-header>
						<panel-title>Area Chart</panel-title>
						<panel-toolbar />
					</panel-header>
					<panel-body class="p-0">
						<p class="mb-0 p-3">
							With their mountain-like appearance, JavaScript Area Charts are used to represent quantitative variations.
						</p>
						<div class="pe-10px">
							<apexchart :height="chart3.height" :options="chart3.options" :series="chart3.series"></apexchart>
						</div>
					</panel-body>
					<highlightjs :code="code3" />
				</panel>
				<!-- END panel -->
			</div>
			<!-- END col-6 -->
			<!-- BEGIN col-6 -->
			<div class="col-xl-6">
				<!-- BEGIN panel -->
				<panel>
					<panel-header>
						<panel-title>Bar Chart</panel-title>
						<panel-toolbar />
					</panel-header>
					<panel-body class="p-0">
						<p class="mb-0 p-3">
							Unlike the Column chart, a JavaScript Bar Chart is oriented in a horizontal manner using rectangular bars. 
						</p>
						<div class="ps-5px pe-10px">
							<apexchart :height="chart4.height" :options="chart4.options" :series="chart4.series"></apexchart>
						</div>
					</panel-body>
					<highlightjs :code="code4" />
				</panel>
				<!-- END panel -->
			</div>
			<!-- END col-6 -->
			<!-- BEGIN col-6 -->
			<div class="col-xl-6">
				<!-- BEGIN panel -->
				<panel>
					<panel-header>
						<panel-title>Mixed Chart</panel-title>
						<panel-toolbar />
					</panel-header>
					<panel-body class="p-0">
						<p class="mb-0 p-3">
							A JavaScript Mixed Chart or a Combo Chart is a visualization that allows the combination of two or more distinct graphs. 
						</p>
						<div class="pe-10px">
							<apexchart :height="chart5.height" :options="chart5.options" :series="chart5.series"></apexchart>
						</div>
					</panel-body>
					<highlightjs :code="code5" />
				</panel>
				<!-- END panel -->
			</div>
			<!-- END col-6 -->
			<!-- BEGIN col-6 -->
			<div class="col-xl-6">
				<!-- BEGIN panel -->
				<panel>
					<panel-header>
						<panel-title>Candlestick Chart</panel-title>
						<panel-toolbar />
					</panel-header>
					<panel-body class="p-0">
						<p class="mb-0 p-3">
							A candlestick chart (also called Japanese candlestick chart) is a style of financial chart used to describe price movements of a security, derivative, or currency. 
						</p>
						<div class="ps-5px pe-10px">
							<apexchart :height="chart6.height" :options="chart6.options" :series="chart6.series"></apexchart>
						</div>
					</panel-body>
					<highlightjs :code="code6" />
				</panel>
				<!-- END panel -->
			</div>
			<!-- END col-6 -->
			<!-- BEGIN col-6 -->
			<div class="col-xl-6">
				<!-- BEGIN panel -->
				<panel>
					<panel-header>
						<panel-title>Bubble Chart</panel-title>
						<panel-toolbar />
					</panel-header>
					<panel-body class="p-0">
						<p class="mb-0 p-3">
							JavaScript Bubble Charts are useful for showing data in a three-dimensional manner. In a bubble chart, data points are depicted with bubbles.
						</p>
						<div class="ps-5px pe-10px">
							<apexchart :height="chart7.height" :options="chart7.options" :series="chart7.series"></apexchart>
						</div>
					</panel-body>
					<highlightjs :code="code6" />
				</panel>
				<!-- END panel -->
			</div>
			<!-- END col-6 -->
			<!-- BEGIN col-6 -->
			<div class="col-xl-6">
				<!-- BEGIN panel -->
				<panel>
					<panel-header>
						<panel-title>Scatter Chart</panel-title>
						<panel-toolbar />
					</panel-header>
					<panel-body class="p-0">
						<p class="mb-0 p-3">
							For non-linearly related variables, JavaScript Scatter Charts are quite useful when there is a need to graphically establish a relationship between the variables.
						</p>
						<div class="ps-5px pe-10px">
							<apexchart :height="chart8.height" :options="chart8.options" :series="chart8.series"></apexchart>
						</div>
					</panel-body>
					<highlightjs :code="code8" />
				</panel>
				<!-- END panel -->
			</div>
			<!-- END col-6 -->
			<!-- BEGIN col-6 -->
			<div class="col-xl-6">
				<!-- BEGIN panel -->
				<panel>
					<panel-header>
						<panel-title>Heatmap Chart</panel-title>
						<panel-toolbar />
					</panel-header>
					<panel-body class="p-0">
						<p class="mb-0 p-3">
							A heat map is a two-dimensional representation of data in which values are represented by colors.
						</p>
						<div class="ps-5px pe-10px">
							<apexchart :height="chart9.height" :options="chart9.options" :series="chart9.series"></apexchart>
						</div>
					</panel-body>
					<highlightjs :code="code9" />
				</panel>
				<!-- END panel -->
			</div>
			<!-- END col-6 -->
			<!-- BEGIN col-6 -->
			<div class="col-xl-6">
				<!-- BEGIN panel -->
				<panel>
					<panel-header>
						<panel-title>Pie Chart</panel-title>
						<panel-toolbar />
					</panel-header>
					<panel-body class="p-0">
						<p class="mb-0 p-3">
							A pie chart (or a circle chart) is a circular statistical graphic, which is divided into slices to illustrate numerical proportion. 
						</p>
						<div class="ps-5px pe-10px">
							<apexchart :height="chart10.height" :options="chart10.options" :series="chart10.series"></apexchart>
						</div>
					</panel-body>
					<highlightjs :code="code10" />
				</panel>
				<!-- END panel -->
			</div>
			<!-- END col-6 -->
			<!-- BEGIN col-6 -->
			<div class="col-xl-6">
				<!-- BEGIN panel -->
				<panel>
					<panel-header>
						<panel-title>Radial Bar Chart</panel-title>
						<panel-toolbar />
					</panel-header>
					<panel-body class="p-0">
						<p class="mb-0 p-3">
							Radial Bar Charts are valuable in showing comparisons between categories by using circularly shaped bars.
						</p>
						<div class="ps-5px pe-10px">
							<apexchart :height="chart11.height" :options="chart11.options" :series="chart11.series"></apexchart>
						</div>
					</panel-body>
					<highlightjs :code="code11" />
				</panel>
				<!-- END panel -->
			</div>
			<!-- END col-6 -->
			<!-- BEGIN col-6 -->
			<div class="col-xl-6">
				<!-- BEGIN panel -->
				<panel>
					<panel-header>
						<panel-title>Radar Chart</panel-title>
						<panel-toolbar />
					</panel-header>
					<panel-body class="p-0">
						<p class="mb-0 p-3">
							Radar chart is a graphical method of displaying two-dimensional chart of three or more quantitative variables represented on axes starting from the same point.
						</p>
						<div class="ps-5px pe-10px">
							<apexchart :height="chart12.height" :options="chart12.options" :series="chart12.series"></apexchart>
						</div>
					</panel-body>
					<highlightjs :code="code12" />
				</panel>
				<!-- END panel -->
			</div>
			<!-- END col-6 -->
		</div>
		<!-- END row -->
	</div>
</template>