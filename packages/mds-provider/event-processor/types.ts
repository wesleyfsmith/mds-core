/*
    Copyright 2019 City of Los Angeles.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
 */

export interface StreamEntry<Data = unknown> {
  id: string
  type: string
  data: Data
}

export interface LabeledStreamEntry<Labels = unknown, Data = unknown> extends StreamEntry<Data> {
  labels: Labels
}

export interface StreamEntryLabels<Labels> {
  [P: string]: Labels
}
