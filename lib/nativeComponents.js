/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import {requireNativeComponent} from 'react-native';

const NativeSurfaceView = requireNativeComponent('ARTSurfaceViewNew');
const NativeGroup = requireNativeComponent('ARTGroupNew');
const NativeShape = requireNativeComponent('ARTShapeNew');
const NativeText = requireNativeComponent('ARTTextNew');

export {NativeSurfaceView, NativeGroup, NativeShape, NativeText};
