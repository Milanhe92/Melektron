export default function MITLicense() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <div className="bg-gradient-to-r from-yellow-900 to-amber-900 rounded-2xl p-8 mb-8">
        <h1 className="text-3xl font-bold mb-4 text-center">MIT Лиценца</h1>
        <p className="text-center mb-6">Отворени код дозвољен за комерцијалну употребу</p>
      </div>

      <div className="prose prose-invert max-w-none">
        <h2>О лиценци</h2>
        <p>
          MIT лиценца је пермисивна лиценца за отворени код која омогућава бесплатну употребу,
          копирање, измену, спајање, објављивање, дистрибуцију, сублиценцирање и/или продају
          копија софтвера.
        </p>
        
        <h2>Кључна одредба</h2>
        <pre className="bg-gray-800 p-4 rounded text-sm">
          {`The MIT License (MIT)

Copyright (c) 2025 Milan He (https://codepen.io/Milan-He/pen/VYYyjJp)
Fork of an original work Milanhe92 (https://codepen.io/Milan-He/pen/ZYYvONd)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`}
        </pre>
        
        <h2>Како применити</h2>
        <p>
          Додајте следеће у header фајла или у LICENSE.txt фајл у корену вашег пројекта:
        </p>
        <pre className="bg-gray-800 p-4 rounded">
          {`Copyright (c) [Година] [Име аутора]

MIT License`}
        </pre>
        
        <h2>Званични документ</h2>
        <p>
          Преузмите пуни текст лиценце:
        </p>
        <a 
          href="/licenses/mit.txt" 
          download
          className="inline-block bg-yellow-600 text-white px-6 py-3 rounded-lg mt-4"
        >
          📥 Преузми TXT документ
        </a>
      </div>
    </div>
  );
}