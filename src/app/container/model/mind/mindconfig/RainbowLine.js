import React, {useState} from 'react';
import {Tooltip} from 'components';
import {getPrefix} from '../../../../../lib/classes';

export default React.memo(({defaultValue, onChange}) => {
    const [rainbowLine, setRainbowLine] = useState(defaultValue || {});
    const currentPrefix = getPrefix('container-model-mind-config-rainbowline');
    // 彩虹线条配置
    const rainbowLinesOptions = [
        {
            value: 'close',
        },
        {
            value: 'colors1',
            list: [
                'rgb(255, 213, 73)',
                'rgb(255, 136, 126)',
                'rgb(107, 225, 141)',
                'rgb(151, 171, 255)',
                'rgb(129, 220, 242)',
                'rgb(255, 163, 125)',
                'rgb(152, 132, 234)',
            ],
        },
        {
            value: 'colors2',
            list: [
                'rgb(248, 93, 93)',
                'rgb(255, 151, 84)',
                'rgb(255, 214, 69)',
                'rgb(73, 205, 140)',
                'rgb(64, 192, 255)',
                'rgb(84, 110, 214)',
                'rgb(164, 93, 220)',
            ],
        },
        {
            value: 'colors3',
            list: [
                'rgb(140, 240, 231)',
                'rgb(74, 210, 255)',
                'rgb(65, 168, 243)',
                'rgb(49, 128, 205)',
                'rgb(188, 226, 132)',
                'rgb(113, 215, 123)',
                'rgb(120, 191, 109)',
            ],
        },
        {
            value: 'colors4',
            list: [
                'rgb(169, 98, 99)',
                'rgb(245, 125, 123)',
                'rgb(254, 183, 168)',
                'rgb(251, 218, 171)',
                'rgb(138, 163, 181)',
                'rgb(131, 127, 161)',
                'rgb(84, 83, 140)',
            ],
        },
        {
            value: 'colors5',
            list: [
                'rgb(255, 229, 142)',
                'rgb(254, 158, 41)',
                'rgb(248, 119, 44)',
                'rgb(232, 82, 80)',
                'rgb(182, 66, 98)',
                'rgb(99, 54, 99)',
                'rgb(65, 40, 82)',
            ],
        },
        {
            value: 'colors6',
            list: [
                'rgb(171, 227, 209)',
                'rgb(107, 201, 196)',
                'rgb(55, 170, 169)',
                'rgb(18, 135, 131)',
                'rgb(74, 139, 166)',
                'rgb(75, 105, 150)',
                'rgb(57, 75, 133)',
            ],
        },
    ];
    const onClick = (o) => {
        const currentRainbowLine = {
            open: !!o.list,
            colorsList: o.list,
        };
        setRainbowLine(currentRainbowLine);
        onChange && onChange(currentRainbowLine);
    };
    const RainbowLineList = () => {
        return <div className={`${currentPrefix}-list`}>
          {
                rainbowLinesOptions.map((o) => {
                    return <div onClick={() => onClick(o)} key={o.value} className={`${currentPrefix}-line`}>
                      {o.list ? o.list.map((c) => {
                            return <span className={`${currentPrefix}-item`} key={c} style={{background: c}}/>;
                        }) : '不使用彩虹线条'}
                    </div>;
                })
            }
        </div>;
    };
    return <div className={currentPrefix}>
      <Tooltip force title={<RainbowLineList/>}>
        <div className={`${currentPrefix}-line`}>
          {rainbowLine.open ? rainbowLine.colorsList.map((c) => {
                    return <span className={`${currentPrefix}-item`} key={c} style={{background: c}}/>;
                }) : '不使用彩虹线条'}
        </div>
      </Tooltip>
    </div>;
});
