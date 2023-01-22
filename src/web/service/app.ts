// Copyright 2023 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import express, { Express } from 'express';

/*
 * To run the app: `npm run build && node dist/web/service/app.js`
 */
const app: Express = express();
const port = 3030;

app.get('/', (_req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});
