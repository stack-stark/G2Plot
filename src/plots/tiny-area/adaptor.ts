import { theme, scale, animation, annotation, tooltip } from '../../adaptor/common';
import { Params } from '../../core/adaptor';
import { flow, deepAssign } from '../../utils';
import { area, line, point } from '../../adaptor/geometries';
import { X_FIELD, Y_FIELD } from '../tiny-line/constants';
import { adjustYMetaByZero } from '../../utils/data';
import { TinyAreaOptions } from './types';

/**
 * 字段
 * @param params
 */
function geometry(params: Params<TinyAreaOptions>): Params<TinyAreaOptions> {
  const { chart, options } = params;
  const { data, xAxis, yAxis, color, areaStyle, point: pointOptions, line: lineOptions } = options;

  const seriesData = data.map((y: number, x: number) => {
    return { x, y };
  });

  chart.data(seriesData);

  const p = deepAssign({}, params, {
    options: {
      xField: X_FIELD,
      yField: Y_FIELD,
      area: { color, style: areaStyle },
      line: lineOptions,
      point: pointOptions,
    },
  });
  // area geometry 处理
  area(p);
  line(p);
  point(p);

  chart.axis(false);
  chart.legend(false);

  // scale
  scale(
    {
      [X_FIELD]: xAxis,
      [Y_FIELD]: yAxis,
    },
    {
      [X_FIELD]: {
        type: 'cat',
      },
      [Y_FIELD]: adjustYMetaByZero(seriesData, Y_FIELD),
    }
  )(params);

  return params;
}

/**
 * 迷你面积图适配器
 * @param chart
 * @param options
 */
export function adaptor(params: Params<TinyAreaOptions>) {
  return flow(geometry, tooltip, theme, animation, annotation())(params);
}
