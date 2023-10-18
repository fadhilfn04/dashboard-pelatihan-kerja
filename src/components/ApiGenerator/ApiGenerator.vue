<template>
  <particles></particles>
  <div class="w-full bg-white border border-gray-200 rounded-lg shadow">
    <div class="p-6 border-b-2">
      <h5 class="font-semibold text-lg">API Generator</h5>
    </div>
    <div class="p-6">
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3">NO</th>
              <th scope="col" class="px-6 py-3">DATA</th>
              <th scope="col" class="px-6 py-3">URL</th>
              <th scope="col" class="px-6 py-3">AKSI</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4">1</td>
              <td class="px-6 py-4">Peserta</td>
              <td class="px-6 py-4">{{ API_URL }}/api/peserta</td>
              <td class="px-6 py-4">
                <button
                  type="button"
                  class="text-white bg-brand-blue-1 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2 mr-2 mb-2"
                  @click="showModalPeserta"
                >
                  Detail
                </button>
              </td>
            </tr>

            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4">2</td>
              <td class="px-6 py-4">Detail Peserta Pelatihan</td>
              <td class="px-6 py-4">{{ API_URL }}/api/peserta_pelatihan/{nik}</td>
              <td class="px-6 py-4">
                <button
                  type="button"
                  class="text-white bg-brand-blue-1 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2 mr-2 mb-2"
                  @click="showModalPesertaPelatihanNIK"
                >
                  Detail
                </button>
              </td>
            </tr>

            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4">3</td>
              <td class="px-6 py-4">Detail Peserta Pemagangan</td>
              <td class="px-6 py-4">{{ API_URL }}/api/peserta_pemagangan/{nik}</td>
              <td class="px-6 py-4">
                <button
                  type="button"
                  class="text-white bg-brand-blue-1 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2 mr-2 mb-2"
                  @click="showModalPesertaPemaganganNIK"
                >
                  Detail
                </button>
              </td>
            </tr>

            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4">4</td>
              <td class="px-6 py-4">Lembaga Pelatihan Kerja</td>
              <td class="px-6 py-4">{{ API_URL }}/api/lembaga_pelatihan</td>
              <td class="px-6 py-4">
                <button
                  type="button"
                  class="text-white bg-brand-blue-1 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2 mr-2 mb-2"
                  @click="showModalLembagaPelatihan"
                >
                  Detail
                </button>
              </td>
            </tr>

            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4">5</td>
              <td class="px-6 py-4">Detail Lembaga Pelatihan Kerja</td>
              <td class="px-6 py-4">{{ API_URL }}/api/lembaga_pelatihan/{vin}</td>
              <td class="px-6 py-4">
                <button
                  type="button"
                  class="text-white bg-brand-blue-1 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2 mr-2 mb-2"
                  @click="showModalLembagaPelatihanVIN"
                >
                  Detail
                </button>
              </td>
            </tr>

            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4">6</td>
              <td class="px-6 py-4">Tenaga Pelatihan</td>
              <td class="px-6 py-4">{{ API_URL }}/api/tenaga_pelatihan</td>
              <td class="px-6 py-4">
                <button
                  type="button"
                  class="text-white bg-brand-blue-1 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2 mr-2 mb-2"
                  @click="showModalTenagaPelatihan"
                >
                  Detail
                </button>
              </td>
            </tr>

            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4">7</td>
              <td class="px-6 py-4">Detail Tenaga Pelatihan</td>
              <td class="px-6 py-4">{{ API_URL }}/api/tenaga_pelatihan/{nik}</td>
              <td class="px-6 py-4">
                <button
                  type="button"
                  class="text-white bg-brand-blue-1 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2 mr-2 mb-2"
                  @click="showModalTenagaPelatihanNIK"
                >
                  Detail
                </button>
              </td>
            </tr>

            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4">8</td>
              <td class="px-6 py-4">Instruktur</td>
              <td class="px-6 py-4">{{ API_URL }}/api/instruktur</td>
              <td class="px-6 py-4">
                <button
                  type="button"
                  class="text-white bg-brand-blue-1 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2 mr-2 mb-2"
                  @click="showModalInstruktur"
                >
                  Detail
                </button>
              </td>
            </tr>

            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4">9</td>
              <td class="px-6 py-4">Detail Instruktur</td>
              <td class="px-6 py-4">{{ API_URL }}/api/instruktur/{nik}</td>
              <td class="px-6 py-4">
                <button
                  type="button"
                  class="text-white bg-brand-blue-1 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2 mr-2 mb-2"
                  @click="showModalInstrukturNIK"
                >
                  Detail
                </button>
              </td>
            </tr>

            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4">10</td>
              <td class="px-6 py-4">Program Pelatihan</td>
              <td class="px-6 py-4">{{ API_URL }}/api/program_pelatihan</td>
              <td class="px-6 py-4">
                <button
                  type="button"
                  class="text-white bg-brand-blue-1 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2 mr-2 mb-2"
                  @click="showModalProgramPelatihan"
                >
                  Detail
                </button>
              </td>
            </tr>

            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4">11</td>
              <td class="px-6 py-4">Detail Program Pelatihan</td>
              <td class="px-6 py-4">{{ API_URL }}/api/program_pelatihan/{courseCode}</td>
              <td class="px-6 py-4">
                <button
                  type="button"
                  class="text-white bg-brand-blue-1 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2 mr-2 mb-2"
                  @click="showModalProgramPelatihanCourseCode"
                >
                  Detail
                </button>
              </td>
            </tr>

            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4">12</td>
              <td class="px-6 py-4">Program Lembaga</td>
              <td class="px-6 py-4">{{ API_URL }}/api/program_pelathan_lembaga</td>
              <td class="px-6 py-4">
                <button
                  type="button"
                  class="text-white bg-brand-blue-1 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2 mr-2 mb-2"
                  @click="showModalProgramLembaga"
                >
                  Detail
                </button>
              </td>
            </tr>

            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4">13</td>
              <td class="px-6 py-4">Detail Program Lembaga</td>
              <td class="px-6 py-4">{{ API_URL }}/api/program_pelathan_lembaga/{id}</td>
              <td class="px-6 py-4">
                <button
                  type="button"
                  class="text-white bg-brand-blue-1 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2 mr-2 mb-2"
                  @click="showModalProgramLembagaID"
                >
                  Detail
                </button>
              </td>
            </tr>

            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4">14</td>
              <td class="px-6 py-4">Penyelenggara Magang</td>
              <td class="px-6 py-4">{{ API_URL }}/api/penyelenggara_magang</td>
              <td class="px-6 py-4">
                <button
                  type="button"
                  class="text-white bg-brand-blue-1 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2 mr-2 mb-2"
                  @click="showModalPenyelenggaraMagang"
                >
                  Detail
                </button>
              </td>
            </tr>

            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4">15</td>
              <td class="px-6 py-4">Detail Penyelenggara Magang</td>
              <td class="px-6 py-4">{{ API_URL }}/api/penyelenggara_magang/{nib}</td>
              <td class="px-6 py-4">
                <button
                  type="button"
                  class="text-white bg-brand-blue-1 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2 mr-2 mb-2"
                  @click="showModalPenyelenggaraMagangNIB"
                >
                  Detail
                </button>
              </td>
            </tr>

            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4">16</td>
              <td class="px-6 py-4">Program Pemagangan</td>
              <td class="px-6 py-4">{{ API_URL }}/api/program_pemagangan</td>
              <td class="px-6 py-4">
                <button
                  type="button"
                  class="text-white bg-brand-blue-1 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2 mr-2 mb-2"
                  @click="showModalProgramPemagangan"
                >
                  Detail
                </button>
              </td>
            </tr>

            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4">17</td>
              <td class="px-6 py-4">Detail Program Pemagangan</td>
              <td class="px-6 py-4">{{ API_URL }}/api/program_pemagangan/{id}</td>
              <td class="px-6 py-4">
                <button
                  type="button"
                  class="text-white bg-brand-blue-1 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2 mr-2 mb-2"
                  @click="showModalProgramPemaganganID"
                >
                  Detail
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <Modal size="7xl" v-if="isShowModalLembagaPelatihan" @close="closeModalLembagaPelatihan">
    <template #header>
      <div class="flex items-center text-lg">
        <span class="mr-4 rounded-lg bg-green-400 px-2.5 py-1.5 text-white">GET</span>Lembaga Pelatihan
      </div>
    </template>
    <template #body>
      <div class="flex flex-col">
        <div class="mb-2">URL</div>
        <div class="w-full rounded bg-gray-200 p-4 text-gray-700">{{ API_URL }}/api/lembaga_pelatihan</div>
        <div class="mb-2 mt-4">Contoh Response</div>
        <div class="h-72 w-full overflow-y-auto rounded bg-gray-200 p-4 text-sm text-gray-700">
<pre>{
  "success": true,
  "message": "Data dari tabel: lembaga_pelatihan",
  "data": {
    "current_page": 1,
    "data": [
      {
        "vin": "2302327302",
        "nama_lembaga": "LPK SEABAR CRUISESHIP COLLEGE CIMAHI",
        "no_telp": "0818200279",
        "email": "ptsatriaraya@gmail.com",
        "alamat": "JL.SATRIA RAYA F39\nBABAKAN CIPARAY",
        "status_akreditasi": "ACCREDITED",
        "tanggal_akreditasi": "2023-04-04",
        "status_verifikasi": true,
        "kapasitas_latih": 200,
        "nama_kabupaten_kota": "KAB. ACEH BARAT",
        "nama_kejuruan": "CONTOH KEJURUAN",
        "nama_tipe_lembaga": "SWASTA",
        "nama_tipe_institusi": "INDUSTRIAL",
        "created_at": "2023-08-15 14:55:00",
        "updated_at": "2023-08-15 14:55:00",
        "deleted_at": null
      },
      {
        "vin": "2302327303",
        "nama_lembaga": "LPK SEABAR CRUISESHIP COLLEGE PADALARANG",
        "no_telp": "0818200279",
        "email": "ptsatriaraya@gmail.com",
        "alamat": "JL.SATRIA RAYA F39\nBABAKAN CIPARAY",
        "status_akreditasi": "NOT ACCREDITED",
        "tanggal_akreditasi": "2023-04-04",
        "status_verifikasi": true,
        "kapasitas_latih": 300,
        "nama_kabupaten_kota": "KAB. ACEH BARAT DAYA",
        "nama_kejuruan": "CONTOH KEJURUAN",
        "nama_tipe_lembaga": "YAYASAN",
        "nama_tipe_institusi": "INDUSTRIAL",
        "created_at": "2023-08-15 14:55:00",
        "updated_at": "2023-08-15 14:55:00",
        "deleted_at": null
      },
      {
        "vin": "2302327305",
        "nama_lembaga": "LPK SEABAR CRUISESHIP COLLEGE CIKALONG",
        "no_telp": "0818200279",
        "email": "ptsatriaraya@gmail.com",
        "alamat": "JL.SATRIA RAYA F39\nBABAKAN CIPARAY",
        "status_akreditasi": "NOT ACCREDITED",
        "tanggal_akreditasi": "2023-04-04",
        "status_verifikasi": true,
        "kapasitas_latih": 300,
        "nama_kabupaten_kota": "KAB. ACEH BARAT DAYA",
        "nama_kejuruan": "CONTOH KEJURUAN",
        "nama_tipe_lembaga": "PRIBADI",
        "nama_tipe_institusi": "INDUSTRIAL",
        "created_at": "2023-08-15 14:55:00",
        "updated_at": "2023-08-15 14:55:00",
        "deleted_at": null
      },
      {
        "vin": "2302327304",
        "nama_lembaga": "LPK SEABAR CRUISESHIP COLLEGE CIPATAT",
        "no_telp": "0818200279",
        "email": "ptsatriaraya@gmail.com",
        "alamat": "JL.SATRIA RAYA F39\nBABAKAN CIPARAY",
        "status_akreditasi": "NOT ACCREDITED",
        "tanggal_akreditasi": "2023-04-04",
        "status_verifikasi": true,
        "kapasitas_latih": 300,
        "nama_kabupaten_kota": "KAB. ACEH BARAT DAYA",
        "nama_kejuruan": "CONTOH KEJURUAN",
        "nama_tipe_lembaga": "PRIBADI",
        "nama_tipe_institusi": "INDUSTRIAL",
        "created_at": "2023-08-15 14:55:00",
        "updated_at": "2023-08-15 14:55:00",
        "deleted_at": null
      },
      {
        "vin": "2302327301",
        "nama_lembaga": "LPK SEABAR CRUISESHIP COLLEGE BANDUNG",
        "no_telp": "0818200279",
        "email": "ptsatriaraya@gmail.com",
        "alamat": "JL.SATRIA RAYA F39\nBABAKAN CIPARAY",
        "status_akreditasi": "ACCREDITED",
        "tanggal_akreditasi": "2023-04-04",
        "status_verifikasi": true,
        "kapasitas_latih": 100,
        "nama_kabupaten_kota": "KAB TIMOR TENGAH SELATAN",
        "nama_kejuruan": "CONTOH KEJURUAN",
        "nama_tipe_lembaga": "PEMERINTAH",
        "nama_tipe_institusi": "INDUSTRIAL",
        "created_at": "2023-08-15 14:55:00",
        "updated_at": "2023-08-15 14:55:00",
        "deleted_at": null
      }
    ],
    "first_page_url": "http://localhost:8000/api/lembaga_pelatihan?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "http://localhost:8000/api/lembaga_pelatihan?page=1",
    "links": [
      {
        "url": null,
        "label": "pagination.previous",
        "active": false
      },
      {
        "url": "http://localhost:8000/api/lembaga_pelatihan?page=1",
        "label": "1",
        "active": true
      },
      {
        "url": null,
        "label": "pagination.next",
        "active": false
      }
    ],
    "next_page_url": null,
    "path": "http://localhost:8000/api/lembaga_pelatihan",
    "per_page": 10,
    "prev_page_url": null,
    "to": 5,
    "total": 5
  }
}</pre>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="flex justify-end">
        <button
          @click="closeModalLembagaPelatihan"
          type="button"
          class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
        >
          Close
        </button>
      </div>
    </template>
  </Modal>

  <Modal size="7xl" v-if="isShowModalPeserta" @close="closeModalPeserta">
    <template #header>
      <div class="flex items-center text-lg">
        <span class="mr-4 rounded-lg bg-green-400 px-2.5 py-1.5 text-white">GET</span>Peserta
      </div>
    </template>
    <template #body>
      <div class="flex flex-col">
        <div class="mb-2">URL</div>
        <div class="w-full rounded bg-gray-200 p-4 text-gray-700">{{ API_URL }}/api/peserta</div>
        <div class="mb-2 mt-4">Contoh Response</div>
        <div class="h-72 w-full overflow-y-auto rounded bg-gray-200 p-4 text-sm text-gray-700">
<pre>{
  "success": true,
  "message": "Data dari tabel: peserta",
  "data": {
    "current_page": 1,
    "data": [
      {
        "nik": "5203180607000002",
        "nama_peserta": "JUWANDI WIJAYA",
        "jenis_kelamin": "Perempuan",
        "no_telp": "087860978481",
        "email": "juwandiwijya0@gmail.com",
        "alamat": "gubuk senteluk",
        "tempat_lahir": "Jakarta",
        "tanggal_lahir": "2000-06-07",
        "status_disabilitas": false,
        "nama_pendidikan": "S1",
        "nama_kecamatan": "Abab",
        "created_at": "2023-08-21 09:54:00",
        "updated_at": "2023-08-21 09:54:00",
        "deleted_at": null
      },
      {
        "nik": "5203180607000003",
        "nama_peserta": "FADHIL FERDIAN",
        "jenis_kelamin": "Laki-laki",
        "no_telp": "087860978481",
        "email": "fadhilferdian@gmail.com",
        "alamat": "Bandung",
        "tempat_lahir": "Bandung",
        "tanggal_lahir": "1999-07-04",
        "status_disabilitas": false,
        "nama_pendidikan": "S1",
        "nama_kecamatan": "Abab",
        "created_at": "2023-08-21 09:54:00",
        "updated_at": "2023-08-21 09:54:00",
        "deleted_at": null
      },
      {
        "nik": "5203180607000004",
        "nama_peserta": "RIZKY ASHYARI",
        "jenis_kelamin": "Laki-laki",
        "no_telp": "087860978481",
        "email": "rizkyashyari@gmail.com",
        "alamat": "Bandung",
        "tempat_lahir": "Bandung",
        "tanggal_lahir": "1999-07-04",
        "status_disabilitas": false,
        "nama_pendidikan": "S1",
        "nama_kecamatan": "Abab",
        "created_at": "2023-08-21 09:54:00",
        "updated_at": "2023-08-21 09:54:00",
        "deleted_at": null
      }
    ],
    "first_page_url": "http://localhost:8000/api/peserta?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "http://localhost:8000/api/peserta?page=1",
    "links": [
      {
        "url": null,
        "label": "pagination.previous",
        "active": false
      },
      {
        "url": "http://localhost:8000/api/peserta?page=1",
        "label": "1",
        "active": true
      },
      {
        "url": null,
        "label": "pagination.next",
        "active": false
      }
    ],
    "next_page_url": null,
    "path": "http://localhost:8000/api/peserta",
    "per_page": 10,
    "prev_page_url": null,
    "to": 3,
    "total": 3
  }
}</pre>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="flex justify-end">
        <button
          @click="closeModalPeserta"
          type="button"
          class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
        >
          Close
        </button>
      </div>
    </template>
  </Modal>

  <Modal size="7xl" v-if="isShowModalTenagaPelatihan" @close="closeModalTenagaPelatihan">
    <template #header>
      <div class="flex items-center text-lg">
        <span class="mr-4 rounded-lg bg-green-400 px-2.5 py-1.5 text-white">GET</span>Tenaga Pelatihan
      </div>
    </template>
    <template #body>
      <div class="flex flex-col">
        <div class="mb-2">URL</div>
        <div class="w-full rounded bg-gray-200 p-4 text-gray-700">{{ API_URL }}/api/tenaga_pelatihan</div>
        <div class="mb-2 mt-4">Contoh Response</div>
        <div class="h-72 w-full overflow-y-auto rounded bg-gray-200 p-4 text-sm text-gray-700">
<pre>{
  "success": true,
  "message": "Data dari tabel: tenaga_pelatihan",
  "data": {
    "current_page": 1,
    "data": [
      {
        "nik": "17111024",
        "nama_bidang": "Bidang A",
        "nama_lengkap": "Karyawan 1",
        "jenis_kelamin": "Laki-laki",
        "no_telp": "08574321",
        "email": "karyawan@gmail.com",
        "tempat_lahir": "Bandung",
        "tanggal_lahir": "2023-08-30",
        "nama_pendidikan": "S1",
        "nama_kategori": "Pemerintah",
        "created_at": "2023-08-30 15:39:26",
        "updated_at": "2023-08-30 15:39:26",
        "deleted_at": null
      }
    ],
    "first_page_url": "http://localhost:8000/api/tenaga_pelatihan?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "http://localhost:8000/api/tenaga_pelatihan?page=1",
    "links": [
      {
        "url": null,
        "label": "pagination.previous",
        "active": false
      },
      {
        "url": "http://localhost:8000/api/tenaga_pelatihan?page=1",
        "label": "1",
        "active": true
      },
      {
        "url": null,
        "label": "pagination.next",
        "active": false
      }
    ],
    "next_page_url": null,
    "path": "http://localhost:8000/api/tenaga_pelatihan",
    "per_page": 10,
    "prev_page_url": null,
    "to": 1,
    "total": 1
  }
}</pre>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="flex justify-end">
        <button
          @click="closeModalTenagaPelatihan"
          type="button"
          class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
        >
          Close
        </button>
      </div>
    </template>
  </Modal>

  <Modal size="7xl" v-if="isShowModalInstruktur" @close="closeModalInstruktur">
    <template #header>
      <div class="flex items-center text-lg">
        <span class="mr-4 rounded-lg bg-green-400 px-2.5 py-1.5 text-white">GET</span>Instruktur
      </div>
    </template>
    <template #body>
      <div class="flex flex-col">
        <div class="mb-2">URL</div>
        <div class="w-full rounded bg-gray-200 p-4 text-gray-700">{{ API_URL }}/api/instruktur</div>
        <div class="mb-2 mt-4">Contoh Response</div>
        <div class="h-72 w-full overflow-y-auto rounded bg-gray-200 p-4 text-sm text-gray-700">
<pre>{
  "success": true,
  "message": "Data dari tabel: instruktur",
  "data": {
    "current_page": 1,
    "data": [
      {
        "nik": "5203180607000002",
        "nama_lengkap": "Firman Rahmat Syam",
        "jenis_kelamin": null,
        "no_telp": "087860978481",
        "email": "juwandiwijya0@gmail.com",
        "tempat_lahir": "Jakarta",
        "tanggal_lahir": "2000-06-07",
        "nama_pendidikan": "S1",
        "nama_kategori": "Pemerintah",
        "created_at": "2023-08-21 09:54:00",
        "updated_at": "2023-08-21 09:54:00",
        "deleted_at": null
      }
    ],
    "first_page_url": "http://localhost:8000/api/instruktur?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "http://localhost:8000/api/instruktur?page=1",
    "links": [
      {
        "url": null,
        "label": "pagination.previous",
        "active": false
      },
      {
        "url": "http://localhost:8000/api/instruktur?page=1",
        "label": "1",
        "active": true
      },
      {
        "url": null,
        "label": "pagination.next",
        "active": false
      }
    ],
    "next_page_url": null,
    "path": "http://localhost:8000/api/instruktur",
    "per_page": 10,
    "prev_page_url": null,
    "to": 1,
    "total": 1
  }
}</pre>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="flex justify-end">
        <button
          @click="closeModalInstruktur"
          type="button"
          class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
        >
          Close
        </button>
      </div>
    </template>
  </Modal>

  <Modal size="7xl" v-if="isShowModalProgramPelatihan" @close="closeModalProgramPelatihan">
    <template #header>
      <div class="flex items-center text-lg">
        <span class="mr-4 rounded-lg bg-green-400 px-2.5 py-1.5 text-white">GET</span>Program Pelatihan
      </div>
    </template>
    <template #body>
      <div class="flex flex-col">
        <div class="mb-2">URL</div>
        <div class="w-full rounded bg-gray-200 p-4 text-gray-700">{{ API_URL }}/api/program_pelatihan</div>
        <div class="mb-2 mt-4">Contoh Response</div>
        <div class="h-72 w-full overflow-y-auto rounded bg-gray-200 p-4 text-sm text-gray-700">
<pre>{
  "success": true,
  "message": "Data dari tabel: program_pelatihan",
  "data": {
    "current_page": 1,
    "data": [
      {
        "course_code": "Stankomlatker_194",
        "judul_program": "DESAINER GRAFIS MUDA",
        "status_proglat": "APPROVED",
        "tanggal_terbit_keputusan": "2023-08-21",
        "keterkaitan_program_skema_sertifikasi": true,
        "nama_kbji": "214 (3) Arsitek, Perencana, Surveyor dan Desainer",
        "nama_program": "Kualifikasi",
        "nama_sub_kejuruan": "GAMBAR BANGUNAN",
        "created_at": "2023-08-21 09:54:00",
        "updated_at": "2023-08-21 09:54:00",
        "deleted_at": null
      }
    ],
    "first_page_url": "http://localhost:8000/api/program_pelatihan?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "http://localhost:8000/api/program_pelatihan?page=1",
    "links": [
      {
        "url": null,
        "label": "pagination.previous",
        "active": false
      },
      {
        "url": "http://localhost:8000/api/program_pelatihan?page=1",
        "label": "1",
        "active": true
      },
      {
        "url": null,
        "label": "pagination.next",
        "active": false
      }
    ],
    "next_page_url": null,
    "path": "http://localhost:8000/api/program_pelatihan",
    "per_page": 10,
    "prev_page_url": null,
    "to": 1,
    "total": 1
  }
}</pre>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="flex justify-end">
        <button
          @click="closeModalProgramPelatihan"
          type="button"
          class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
        >
          Close
        </button>
      </div>
    </template>
  </Modal>

  <Modal size="7xl" v-if="isShowModalProgramLembaga" @close="closeModalProgramLembaga">
    <template #header>
      <div class="flex items-center text-lg">
        <span class="mr-4 rounded-lg bg-green-400 px-2.5 py-1.5 text-white">GET</span>Program Lembaga
      </div>
    </template>
    <template #body>
      <div class="flex flex-col">
        <div class="mb-2">URL</div>
        <div class="w-full rounded bg-gray-200 p-4 text-gray-700">{{ API_URL }}/api/program_pelathan_lembaga</div>
        <div class="mb-2 mt-4">Contoh Response</div>
        <div class="h-72 w-full overflow-y-auto rounded bg-gray-200 p-4 text-sm text-gray-700">
<pre>{
  "success": true,
  "message": "Data dari tabel: program_pelathan_lembaga",
  "data": {
    "current_page": 1,
    "data": [
      {
        "id": 1,
        "durasi": 500,
        "kategori": "prakerja",
        "status_selesai_pelatihan": "belum_selesai",
        "tanggal_mulai": "2023-08-21",
        "tanggal_selesai": "2023-08-31",
        "nama_metode": "Online",
        "id_lembaga_pelatihan": "2302327301",
        "id_program_pelatihan": "Stankomlatker_194",
        "id_instruktur": "5203180607000002",
        "created_at": "2023-08-21 09:49:00",
        "updated_at": "2023-08-21 09:49:00",
        "deleted_at": null
      },
      {
        "id": 2,
        "durasi": 500,
        "kategori": "bukan_prakerja",
        "status_selesai_pelatihan": "belum_selesai",
        "tanggal_mulai": "2023-08-21",
        "tanggal_selesai": "2023-08-31",
        "nama_metode": "Online",
        "id_lembaga_pelatihan": "2302327303",
        "id_program_pelatihan": "Stankomlatker_194",
        "id_instruktur": "5203180607000002",
        "created_at": "2023-08-21 09:49:00",
        "updated_at": "2023-08-21 09:49:00",
        "deleted_at": null
      },
      {
        "id": 3,
        "durasi": 500,
        "kategori": "bukan_prakerja",
        "status_selesai_pelatihan": "belum_selesai",
        "tanggal_mulai": "2023-08-21",
        "tanggal_selesai": "2023-08-31",
        "nama_metode": "Online",
        "id_lembaga_pelatihan": "2302327302",
        "id_program_pelatihan": "Stankomlatker_194",
        "id_instruktur": "5203180607000002",
        "created_at": "2023-08-21 09:49:00",
        "updated_at": "2023-08-21 09:49:00",
        "deleted_at": null
      }
    ],
    "first_page_url": "http://localhost:8000/api/program_pelathan_lembaga?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "http://localhost:8000/api/program_pelathan_lembaga?page=1",
    "links": [
      {
        "url": null,
        "label": "pagination.previous",
        "active": false
      },
      {
        "url": "http://localhost:8000/api/program_pelathan_lembaga?page=1",
        "label": "1",
        "active": true
      },
      {
        "url": null,
        "label": "pagination.next",
        "active": false
      }
    ],
    "next_page_url": null,
    "path": "http://localhost:8000/api/program_pelathan_lembaga",
    "per_page": 10,
    "prev_page_url": null,
    "to": 3,
    "total": 3
  }
}</pre>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="flex justify-end">
        <button
          @click="closeModalProgramLembaga"
          type="button"
          class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
        >
          Close
        </button>
      </div>
    </template>
  </Modal>

  <Modal size="7xl" v-if="isShowModalPenyelenggaraMagang" @close="closeModalPenyelenggaraMagang">
    <template #header>
      <div class="flex items-center text-lg">
        <span class="mr-4 rounded-lg bg-green-400 px-2.5 py-1.5 text-white">GET</span>Penyelenggara Magang
      </div>
    </template>
    <template #body>
      <div class="flex flex-col">
        <div class="mb-2">URL</div>
        <div class="w-full rounded bg-gray-200 p-4 text-gray-700">{{ API_URL }}/api/penyelenggara_magang</div>
        <div class="mb-2 mt-4">Contoh Response</div>
        <div class="h-72 w-full overflow-y-auto rounded bg-gray-200 p-4 text-sm text-gray-700">
<pre>{
  "success": true,
  "message": "Data dari tabel: penyelenggara_magang",
  "data": {
    "current_page": 1,
    "data": [
      {
        "nib": "1234567891",
        "nama_penyelenggara": "PT. Kabayan Aishwarya",
        "bidang_usaha_sektor": "Teknologi Informasi",
        "alamat_penyelenggara": "Jalan Amier No 12",
        "no_telp": "086253742532",
        "email": "sejahtera.terpadu@gmail.com",
        "tipe_penyelenggara": "dalam_negeri",
        "nama_kabupaten_kota": "KAB TIMOR TENGAH SELATAN",
        "created_at": "2023-08-21 09:54:00",
        "updated_at": "2023-08-21 09:54:00",
        "deleted_at": null
      },
      {
        "nib": "1234567890",
        "nama_penyelenggara": "PT. Sejahtera Terpadu",
        "bidang_usaha_sektor": "Teknologi Informasi",
        "alamat_penyelenggara": "Jalan Amier No 12",
        "no_telp": "086253742532",
        "email": "sejahtera.terpadu@gmail.com",
        "tipe_penyelenggara": "dalam_negeri",
        "nama_kabupaten_kota": "KAB TIMOR TENGAH SELATAN",
        "created_at": "2023-08-21 09:54:00",
        "updated_at": "2023-08-21 09:54:00",
        "deleted_at": null
      }
    ],
    "first_page_url": "http://localhost:8000/api/penyelenggara_magang?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "http://localhost:8000/api/penyelenggara_magang?page=1",
    "links": [
      {
        "url": null,
        "label": "pagination.previous",
        "active": false
      },
      {
        "url": "http://localhost:8000/api/penyelenggara_magang?page=1",
        "label": "1",
        "active": true
      },
      {
        "url": null,
        "label": "pagination.next",
        "active": false
      }
    ],
    "next_page_url": null,
    "path": "http://localhost:8000/api/penyelenggara_magang",
    "per_page": 10,
    "prev_page_url": null,
    "to": 2,
    "total": 2
  }
}</pre>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="flex justify-end">
        <button
          @click="closeModalPenyelenggaraMagang"
          type="button"
          class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
        >
          Close
        </button>
      </div>
    </template>
  </Modal>

  <Modal size="7xl" v-if="isShowModalProgramPemagangan" @close="closeModalProgramPemagangan">
    <template #header>
      <div class="flex items-center text-lg">
        <span class="mr-4 rounded-lg bg-green-400 px-2.5 py-1.5 text-white">GET</span>Program Pemagangan
      </div>
    </template>
    <template #body>
      <div class="flex flex-col">
        <div class="mb-2">URL</div>
        <div class="w-full rounded bg-gray-200 p-4 text-gray-700">{{ API_URL }}/api/program_pemagangan</div>
        <div class="mb-2 mt-4">Contoh Response</div>
        <div class="h-72 w-full overflow-y-auto rounded bg-gray-200 p-4 text-sm text-gray-700">
<pre>{
  "success": true,
  "message": "Data dari tabel: program_pemagangan",
  "data": {
    "current_page": 1,
    "data": [
      {
        "id": 1,
        "yang_mengeluarkan_persetujuan_magang": "Swasta",
        "nomor_surat_persetujuan": "SP01.03/03/2023",
        "tahun_penyelenggaraan": 2023,
        "tanggal_mulai": "2023-03-21",
        "tanggal_selesai": "2023-08-31",
        "status_selesai": "Selesai",
        "masa_berlaku_izin": "2023-08-21",
        "nama_mentor": "FADHIL FERDIAN",
        "negara_tujuan_pemagangan": "Indonesia",
        "id_penyelenggara_magang": "1234567891",
        "created_at": "2023-08-21 09:54:00",
        "updated_at": "2023-08-21 09:54:00",
        "deleted_at": null
      },
      {
        "id": 2,
        "yang_mengeluarkan_persetujuan_magang": "Pribadi",
        "nomor_surat_persetujuan": "SP01.03/03/2023",
        "tahun_penyelenggaraan": 2023,
        "tanggal_mulai": "2023-04-21",
        "tanggal_selesai": "2023-08-31",
        "status_selesai": "Selesai",
        "masa_berlaku_izin": "2023-08-21",
        "nama_mentor": "FADHIL FERDIAN",
        "negara_tujuan_pemagangan": "Indonesia",
        "id_penyelenggara_magang": "1234567891",
        "created_at": "2023-08-21 09:54:00",
        "updated_at": "2023-08-21 09:54:00",
        "deleted_at": null
      },
      {
        "id": 3,
        "yang_mengeluarkan_persetujuan_magang": "Pemerintah",
        "nomor_surat_persetujuan": "SP01.03/03/2023",
        "tahun_penyelenggaraan": 2023,
        "tanggal_mulai": "2023-05-21",
        "tanggal_selesai": "2023-08-31",
        "status_selesai": "Selesai",
        "masa_berlaku_izin": "2023-08-21",
        "nama_mentor": "FADHIL FERDIAN",
        "negara_tujuan_pemagangan": "Indonesia",
        "id_penyelenggara_magang": "1234567891",
        "created_at": "2023-08-21 09:54:00",
        "updated_at": "2023-08-21 09:54:00",
        "deleted_at": null
      },
      {
        "id": 4,
        "yang_mengeluarkan_persetujuan_magang": "Yayasan",
        "nomor_surat_persetujuan": "SP01.03/03/2023",
        "tahun_penyelenggaraan": 2023,
        "tanggal_mulai": "2023-06-21",
        "tanggal_selesai": "2023-08-31",
        "status_selesai": "Selesai",
        "masa_berlaku_izin": "2023-08-21",
        "nama_mentor": "FADHIL FERDIAN",
        "negara_tujuan_pemagangan": "Indonesia",
        "id_penyelenggara_magang": "1234567891",
        "created_at": "2023-08-21 09:54:00",
        "updated_at": "2023-08-21 09:54:00",
        "deleted_at": null
      },
      {
        "id": 5,
        "yang_mengeluarkan_persetujuan_magang": "Swasta",
        "nomor_surat_persetujuan": "SP01.03/03/2023",
        "tahun_penyelenggaraan": 2023,
        "tanggal_mulai": "2023-07-21",
        "tanggal_selesai": "2023-08-31",
        "status_selesai": "Selesai",
        "masa_berlaku_izin": "2023-08-21",
        "nama_mentor": "FADHIL FERDIAN",
        "negara_tujuan_pemagangan": "Indonesia",
        "id_penyelenggara_magang": "1234567891",
        "created_at": "2023-08-21 09:54:00",
        "updated_at": "2023-08-21 09:54:00",
        "deleted_at": null
      },
      {
        "id": 6,
        "yang_mengeluarkan_persetujuan_magang": "Pemerintah",
        "nomor_surat_persetujuan": "SP01.03/03/2023",
        "tahun_penyelenggaraan": 2023,
        "tanggal_mulai": "2023-09-21",
        "tanggal_selesai": "2023-08-31",
        "status_selesai": "Selesai",
        "masa_berlaku_izin": "2023-08-21",
        "nama_mentor": "FADHIL FERDIAN",
        "negara_tujuan_pemagangan": "Indonesia",
        "id_penyelenggara_magang": "1234567891",
        "created_at": "2023-08-21 09:54:00",
        "updated_at": "2023-08-21 09:54:00",
        "deleted_at": null
      },
      {
        "id": 7,
        "yang_mengeluarkan_persetujuan_magang": "Yayasan",
        "nomor_surat_persetujuan": "SP01.03/03/2023",
        "tahun_penyelenggaraan": 2023,
        "tanggal_mulai": "2023-10-21",
        "tanggal_selesai": "2023-08-31",
        "status_selesai": "Selesai",
        "masa_berlaku_izin": "2023-08-21",
        "nama_mentor": "FADHIL FERDIAN",
        "negara_tujuan_pemagangan": "Indonesia",
        "id_penyelenggara_magang": "1234567891",
        "created_at": "2023-08-21 09:54:00",
        "updated_at": "2023-08-21 09:54:00",
        "deleted_at": null
      },
      {
        "id": 8,
        "yang_mengeluarkan_persetujuan_magang": "Pemerintah",
        "nomor_surat_persetujuan": "SP01.02/03/2023",
        "tahun_penyelenggaraan": 2023,
        "tanggal_mulai": "2023-01-21",
        "tanggal_selesai": "2023-08-31",
        "status_selesai": "Selesai",
        "masa_berlaku_izin": "2023-08-21",
        "nama_mentor": "ASEP JUNAIDI",
        "negara_tujuan_pemagangan": "Indonesia",
        "id_penyelenggara_magang": "1234567890",
        "created_at": "2023-08-21 09:54:00",
        "updated_at": "2023-08-21 09:54:00",
        "deleted_at": null
      },
      {
        "id": 9,
        "yang_mengeluarkan_persetujuan_magang": "Pribadi",
        "nomor_surat_persetujuan": "SP01.03/03/2023",
        "tahun_penyelenggaraan": 2023,
        "tanggal_mulai": "2023-08-21",
        "tanggal_selesai": "2023-08-31",
        "status_selesai": "Selesai",
        "masa_berlaku_izin": "2023-08-21",
        "nama_mentor": "FADHIL FERDIAN",
        "negara_tujuan_pemagangan": "Indonesia",
        "id_penyelenggara_magang": "1234567891",
        "created_at": "2023-08-21 09:54:00",
        "updated_at": "2023-08-21 09:54:00",
        "deleted_at": null
      },
      {
        "id": 10,
        "yang_mengeluarkan_persetujuan_magang": "Swasta",
        "nomor_surat_persetujuan": "SP01.03/03/2023",
        "tahun_penyelenggaraan": 2023,
        "tanggal_mulai": "2023-08-21",
        "tanggal_selesai": "2023-08-31",
        "status_selesai": "Selesai",
        "masa_berlaku_izin": "2023-08-21",
        "nama_mentor": "FADHIL FERDIAN",
        "negara_tujuan_pemagangan": "Indonesia",
        "id_penyelenggara_magang": "1234567891",
        "created_at": "2023-08-21 09:54:00",
        "updated_at": "2023-08-21 09:54:00",
        "deleted_at": null
      }
    ],
    "first_page_url": "http://localhost:8000/api/program_pemagangan?page=1",
    "from": 1,
    "last_page": 2,
    "last_page_url": "http://localhost:8000/api/program_pemagangan?page=2",
    "links": [
      {
        "url": null,
        "label": "pagination.previous",
        "active": false
      },
      {
        "url": "http://localhost:8000/api/program_pemagangan?page=1",
        "label": "1",
        "active": true
      },
      {
        "url": "http://localhost:8000/api/program_pemagangan?page=2",
        "label": "2",
        "active": false
      },
      {
        "url": "http://localhost:8000/api/program_pemagangan?page=2",
        "label": "pagination.next",
        "active": false
      }
    ],
    "next_page_url": "http://localhost:8000/api/program_pemagangan?page=2",
    "path": "http://localhost:8000/api/program_pemagangan",
    "per_page": 10,
    "prev_page_url": null,
    "to": 10,
    "total": 12
  }
}</pre>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="flex justify-end">
        <button
          @click="closeModalProgramPemagangan"
          type="button"
          class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
        >
          Close
        </button>
      </div>
    </template>
  </Modal>

  <Modal size="7xl" v-if="isShowModalPesertaPelatihanNIK" @close="closeModalPesertaPelatihanNIK">
    <template #header>
      <div class="flex items-center text-lg">
        <span class="mr-4 rounded-lg bg-green-400 px-2.5 py-1.5 text-white">GET</span>Detail Peserta Pelatihan berdasarkan NIK
      </div>
    </template>
    <template #body>
      <div class="flex flex-col">
        <div class="mb-2">URL</div>
        <div class="w-full rounded bg-gray-200 p-4 text-gray-700">{{ API_URL }}/api/peserta_pelatihan/{nik}</div>
        <div class="mb-2 mt-4">Contoh Response</div>
        <div class="h-72 w-full overflow-y-auto rounded bg-gray-200 p-4 text-sm text-gray-700">
<pre>{
  "success": true,
  "message": "Data dari tabel: peserta",
  "data": {
    "nik": "5203180607000002",
    "nama_peserta": "JUWANDI WIJAYA",
    "jenis_kelamin": "Perempuan",
    "no_telp": "087860978481",
    "email": "juwandiwijya0@gmail.com",
    "alamat": "gubuk senteluk",
    "tempat_lahir": "Jakarta",
    "tanggal_lahir": "2000-06-07",
    "status_disabilitas": false,
    "nama_pendidikan": "S1",
    "nama_kecamatan": "Abab",
    "created_at": "2023-08-21 09:54:00",
    "updated_at": "2023-08-21 09:54:00",
    "deleted_at": null,
    "pelatihan": [
      {
        "kode_transaksi_pelatihan": "1901620801-D5240907",
        "status_peserta": "sedang_berjalan",
        "status_kelulusan": "lulus",
        "durasi": 500,
        "kategori": "prakerja",
        "status_selesai_pelatihan": "belum_selesai",
        "tanggal_mulai": "2023-08-21",
        "tanggal_selesai": "2023-08-31",
        "jumlah_peminat_program": 5,
        "nama_metode": "Online",
        "lembaga_pelatihan": {
          "vin": "2302327301",
          "nama_lembaga": "LPK SEABAR CRUISESHIP COLLEGE BANDUNG"
        },
        "program_pelatihan": {
          "course_code": "Stankomlatker_194",
          "judul_program": "DESAINER GRAFIS MUDA"
        },
        "instruktur": {
          "nik": "5203180607000002",
          "nama_lengkap": "Firman Rahmat Syam"
        },
        "informasi_penempatan": {
          "status_kebekerjaan": "Bekerja",
          "sumber_data_penempatan": "Peserta",
          "kesesuaian_pelatihan_dgn_penempatan": "Sesuai",
          "berminat_bekerja_di_ln": true,
          "nama_perusahaan_bekerja": "Kanabe"
        }
      }
    ]
  }
}</pre>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="flex justify-end">
        <button
          @click="closeModalPesertaPelatihanNIK"
          type="button"
          class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
        >
          Close
        </button>
      </div>
    </template>
  </Modal>

  <Modal size="7xl" v-if="isShowModalLembagaPelatihanVIN" @close="closeModalLembagaPelatihanVIN">
    <template #header>
      <div class="flex items-center text-lg">
        <span class="mr-4 rounded-lg bg-green-400 px-2.5 py-1.5 text-white">GET</span>Detail Lembaga Pelatihan berdasarkan VIN
      </div>
    </template>
    <template #body>
      <div class="flex flex-col">
        <div class="mb-2">URL</div>
        <div class="w-full rounded bg-gray-200 p-4 text-gray-700">{{ API_URL }}/api/lembaga_pelatihan/{vin}</div>
        <div class="mb-2 mt-4">Contoh Response</div>
        <div class="h-72 w-full overflow-y-auto rounded bg-gray-200 p-4 text-sm text-gray-700">
<pre>{
  "success": true,
  "message": "Data dari tabel: lembaga_pelatihan",
  "data": {
    "vin": "2302327301",
    "nama_lembaga": "LPK SEABAR CRUISESHIP COLLEGE BANDUNG",
    "no_telp": "0818200279",
    "email": "ptsatriaraya@gmail.com",
    "alamat": "JL.SATRIA RAYA F39\nBABAKAN CIPARAY",
    "status_akreditasi": "ACCREDITED",
    "tanggal_akreditasi": "2023-04-04",
    "status_verifikasi": true,
    "kapasitas_latih": 100,
    "nama_kabupaten_kota": "KAB TIMOR TENGAH SELATAN",
    "nama_kejuruan": "CONTOH KEJURUAN",
    "nama_tipe_lembaga": "PEMERINTAH",
    "nama_tipe_institusi": "INDUSTRIAL",
    "created_at": "2023-08-15 14:55:00",
    "updated_at": "2023-08-15 14:55:00",
    "deleted_at": null,
    "tenaga_pelatihan": [
      {
        "nik": "17111024",
        "nama_lengkap": "Karyawan 1",
        "status": "Aktif",
        "validasi": "Valid"
      }
    ],
    "program_pelatihan": [
      {
        "id_program_lembaga": 1,
        "course_code": "Stankomlatker_194",
        "judul_program": "DESAINER GRAFIS MUDA"
      }
    ]
  }
}</pre>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="flex justify-end">
        <button
          @click="closeModalLembagaPelatihanVIN"
          type="button"
          class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
        >
          Close
        </button>
      </div>
    </template>
  </Modal>

  <Modal size="7xl" v-if="isShowModalPesertaPemaganganNIK" @close="closeModalPesertaPemaganganNIK">
    <template #header>
      <div class="flex items-center text-lg">
        <span class="mr-4 rounded-lg bg-green-400 px-2.5 py-1.5 text-white">GET</span>Detail Peserta Pemangangan berdasarkan NIK
      </div>
    </template>
    <template #body>
      <div class="flex flex-col">
        <div class="mb-2">URL</div>
        <div class="w-full rounded bg-gray-200 p-4 text-gray-700">{{ API_URL }}/api/peserta_pemagangan/{nik}</div>
        <div class="mb-2 mt-4">Contoh Response</div>
        <div class="h-72 w-full overflow-y-auto rounded bg-gray-200 p-4 text-sm text-gray-700">
<pre>{
  "success": true,
  "message": "Data dari tabel: peserta",
  "data": {
    "nik": "5203180607000002",
    "nama_peserta": "JUWANDI WIJAYA",
    "jenis_kelamin": "Perempuan",
    "no_telp": "087860978481",
    "email": "juwandiwijya0@gmail.com",
    "alamat": "gubuk senteluk",
    "tempat_lahir": "Jakarta",
    "tanggal_lahir": "2000-06-07",
    "status_disabilitas": false,
    "nama_pendidikan": "S1",
    "nama_kecamatan": "Abab",
    "created_at": "2023-08-21 09:54:00",
    "updated_at": "2023-08-21 09:54:00",
    "deleted_at": null,
    "pemagangan": [
      {
        "kode_transaksi_pelatihan": "1901620801-D5240907",
        "is_magang_luar_negeri": true,
        "durasi_pemagangan": 120,
        "nama_kbji": "214 (3) Arsitek, Perencana, Surveyor dan Desainer",
        "yang_mengeluarkan_persetujuan_magang": "Pemerintah",
        "nomor_surat_persetujuan": "SP01.02/03/2023",
        "tahun_penyelenggaraan": 2023,
        "tanggal_selesai": "2023-08-31",
        "status_selesai": "Selesai",
        "masa_berlaku_izin": "2023-08-21",
        "nama_mentor": "ASEP JUNAIDI",
        "negara_tujuan_pemagangan": "Indonesia",
        "penyelenggara_magang": {
          "nib": "1234567890",
          "nama_penyelenggara": "PT. Sejahtera Terpadu"
        },
        "informasi_penempatan": {
          "status_kebekerjaan": "Bekerja",
          "sumber_data_penempatan": "Peserta",
          "kesesuaian_pelatihan_dgn_penempatan": "Sesuai",
          "berminat_bekerja_di_ln": true,
          "nama_perusahaan_bekerja": "Kanabe"
        }
      }
    ]
  }
}</pre>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="flex justify-end">
        <button
          @click="closeModalPesertaPemaganganNIK"
          type="button"
          class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
        >
          Close
        </button>
      </div>
    </template>
  </Modal>

  <Modal size="7xl" v-if="isShowModalTenagaPelatihanNIK" @close="closeModalTenagaPelatihanNIK">
    <template #header>
      <div class="flex items-center text-lg">
        <span class="mr-4 rounded-lg bg-green-400 px-2.5 py-1.5 text-white">GET</span>Detail Tenaga Pelatihan berdasarkan NIK
      </div>
    </template>
    <template #body>
      <div class="flex flex-col">
        <div class="mb-2">URL</div>
        <div class="w-full rounded bg-gray-200 p-4 text-gray-700">{{ API_URL }}/api/tenaga_pemagangan/{nik}</div>
        <div class="mb-2 mt-4">Contoh Response</div>
        <div class="h-72 w-full overflow-y-auto rounded bg-gray-200 p-4 text-sm text-gray-700">
<pre>{
  "success": true,
  "message": "Data dari tabel: tenaga_pelatihan",
  "data": {
    "nik": "17111024",
    "nama_bidang": "Bidang A",
    "nama_lengkap": "Karyawan 1",
    "jenis_kelamin": "Laki-laki",
    "no_telp": "08574321",
    "email": "karyawan@gmail.com",
    "tempat_lahir": "Bandung",
    "tanggal_lahir": "2023-08-30",
    "nama_pendidikan": "S1",
    "nama_kategori": "Pemerintah",
    "created_at": "2023-08-30 15:39:26",
    "updated_at": "2023-08-30 15:39:26",
    "deleted_at": null,
    "lembaga_pelatihan": [
      {
        "vin": "2302327301",
        "nama_lembaga": "LPK SEABAR CRUISESHIP COLLEGE BANDUNG",
        "status": "Aktif",
        "validasi": "Valid"
      }
    ]
  }
}</pre>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="flex justify-end">
        <button
          @click="closeModalTenagaPelatihanNIK"
          type="button"
          class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
        >
          Close
        </button>
      </div>
    </template>
  </Modal>

  <Modal size="7xl" v-if="isShowModalInstrukturNIK" @close="closeModalInstrukturNIK">
    <template #header>
      <div class="flex items-center text-lg">
        <span class="mr-4 rounded-lg bg-green-400 px-2.5 py-1.5 text-white">GET</span>Detail Instruktur berdasarkan NIK
      </div>
    </template>
    <template #body>
      <div class="flex flex-col">
        <div class="mb-2">URL</div>
        <div class="w-full rounded bg-gray-200 p-4 text-gray-700">{{ API_URL }}/api/instruktur/{nik}</div>
        <div class="mb-2 mt-4">Contoh Response</div>
        <div class="h-72 w-full overflow-y-auto rounded bg-gray-200 p-4 text-sm text-gray-700">
<pre>{
  "success": true,
  "message": "Data dari tabel: instruktur",
  "data": {
    "nik": "5203180607000002",
    "nama_lengkap": "Firman Rahmat Syam",
    "jenis_kelamin": null,
    "no_telp": "087860978481",
    "email": "juwandiwijya0@gmail.com",
    "tempat_lahir": "Jakarta",
    "tanggal_lahir": "2000-06-07",
    "nama_pendidikan": "S1",
    "nama_kategori": "Pemerintah",
    "created_at": "2023-08-21 09:54:00",
    "updated_at": "2023-08-21 09:54:00",
    "deleted_at": null,
    "program_pelatihan": [
      {
        "id_program_lembaga": 1,
        "course_code": "Stankomlatker_194",
        "judul_program": "DESAINER GRAFIS MUDA"
      },
      {
        "id_program_lembaga": 3,
        "course_code": "Stankomlatker_194",
        "judul_program": "DESAINER GRAFIS MUDA"
      },
      {
        "id_program_lembaga": 2,
        "course_code": "Stankomlatker_194",
        "judul_program": "DESAINER GRAFIS MUDA"
      }
    ]
  }
}</pre>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="flex justify-end">
        <button
          @click="closeModalInstrukturNIK"
          type="button"
          class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
        >
          Close
        </button>
      </div>
    </template>
  </Modal>

  <Modal size="7xl" v-if="isShowModalProgramPelatihanCourseCode" @close="closeModalProgramPelatihanCourseCode">
    <template #header>
      <div class="flex items-center text-lg">
        <span class="mr-4 rounded-lg bg-green-400 px-2.5 py-1.5 text-white">GET</span>Detail Program Pelatihan berdasarkan Course Code
      </div>
    </template>
    <template #body>
      <div class="flex flex-col">
        <div class="mb-2">URL</div>
        <div class="w-full rounded bg-gray-200 p-4 text-gray-700">{{ API_URL }}/api/program_pelatihan/{courseCode}</div>
        <div class="mb-2 mt-4">Contoh Response</div>
        <div class="h-72 w-full overflow-y-auto rounded bg-gray-200 p-4 text-sm text-gray-700">
<pre>{
  "success": true,
  "message": "Data dari tabel: program_pelatihan",
  "data": {
    "course_code": "Stankomlatker_194",
    "judul_program": "DESAINER GRAFIS MUDA",
    "status_proglat": "APPROVED",
    "tanggal_terbit_keputusan": "2023-08-21",
    "keterkaitan_program_skema_sertifikasi": true,
    "nama_kbji": "214 (3) Arsitek, Perencana, Surveyor dan Desainer",
    "nama_program": "Kualifikasi",
    "nama_sub_kejuruan": "GAMBAR BANGUNAN",
    "created_at": "2023-08-21 09:54:00",
    "updated_at": "2023-08-21 09:54:00",
    "deleted_at": null,
    "program_lembaga": [
      {
        "id_program_lembaga": 1,
        "durasi": 500,
        "kategori": "prakerja",
        "status_selesai_pelatihan": "belum_selesai",
        "tanggal_mulai": "2023-08-21",
        "tanggal_selesai": "2023-08-31",
        "jumlah_peminat_program": 5,
        "nama_metode": "Online",
        "lembaga_pelatihan": {
          "vin": "2302327301",
          "nama_lembaga": "LPK SEABAR CRUISESHIP COLLEGE BANDUNG"
        },
        "instruktur": {
          "nik": "5203180607000002",
          "nama_lengkap": "Firman Rahmat Syam"
        }
      },
      {
        "id_program_lembaga": 3,
        "durasi": 500,
        "kategori": "bukan_prakerja",
        "status_selesai_pelatihan": "belum_selesai",
        "tanggal_mulai": "2023-08-21",
        "tanggal_selesai": "2023-08-31",
        "jumlah_peminat_program": 5,
        "nama_metode": "Online",
        "lembaga_pelatihan": {
          "vin": "2302327303",
          "nama_lembaga": "LPK SEABAR CRUISESHIP COLLEGE PADALARANG"
        },
        "instruktur": {
          "nik": "5203180607000002",
          "nama_lengkap": "Firman Rahmat Syam"
        }
      },
      {
        "id_program_lembaga": 2,
        "durasi": 500,
        "kategori": "bukan_prakerja",
        "status_selesai_pelatihan": "belum_selesai",
        "tanggal_mulai": "2023-08-21",
        "tanggal_selesai": "2023-08-31",
        "jumlah_peminat_program": 5,
        "nama_metode": "Online",
        "lembaga_pelatihan": {
          "vin": "2302327302",
          "nama_lembaga": "LPK SEABAR CRUISESHIP COLLEGE CIMAHI"
        },
        "instruktur": {
          "nik": "5203180607000002",
          "nama_lengkap": "Firman Rahmat Syam"
        }
      }
    ]
  }
}</pre>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="flex justify-end">
        <button
          @click="closeModalProgramPelatihanCourseCode"
          type="button"
          class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
        >
          Close
        </button>
      </div>
    </template>
  </Modal>

  <Modal size="7xl" v-if="isShowModalProgramLembagaID" @close="closeModalProgramLembagaID">
    <template #header>
      <div class="flex items-center text-lg">
        <span class="mr-4 rounded-lg bg-green-400 px-2.5 py-1.5 text-white">GET</span>Detail Program Lembaga berdasarkan ID
      </div>
    </template>
    <template #body>
      <div class="flex flex-col">
        <div class="mb-2">URL</div>
        <div class="w-full rounded bg-gray-200 p-4 text-gray-700">{{ API_URL }}/api/program_pelatihan_lembaga/{id}</div>
        <div class="mb-2 mt-4">Contoh Response</div>
        <div class="h-72 w-full overflow-y-auto rounded bg-gray-200 p-4 text-sm text-gray-700">
<pre>{
  "success": true,
  "message": "Data dari tabel: program_pelatihan_lembaga",
  "data": {
    "id": 1,
    "durasi": 500,
    "kategori": "prakerja",
    "status_selesai_pelatihan": "belum_selesai",
    "tanggal_mulai": "2023-08-21",
    "tanggal_selesai": "2023-08-31",
    "jumlah_peminat_program": 5,
    "nama_metode": "Online",
    "created_at": "2023-08-21 09:49:00",
    "updated_at": "2023-08-21 09:49:00",
    "deleted_at": null,
    "lembaga_pelatihan": {
      "vin": "2302327301",
      "nama_lembaga": "LPK SEABAR CRUISESHIP COLLEGE BANDUNG"
    },
    "program_pelatihan": {
      "course_code": "Stankomlatker_194",
      "judul_program": "DESAINER GRAFIS MUDA"
    },
    "instruktur": {
      "nik": "5203180607000002",
      "nama_lengkap": "Firman Rahmat Syam"
    },
    "peserta": [
      {
        "nik": "5203180607000002",
        "nama_peserta": "JUWANDI WIJAYA",
        "kode_transaksi_pelatihan": "1901620801-D5240907",
        "status_peserta": "sedang_berjalan",
        "status_kelulusan": "lulus",
        "informasi_penempatan": {
          "status_kebekerjaan": "Bekerja",
          "sumber_data_penempatan": "Peserta",
          "kesesuaian_pelatihan_dgn_penempatan": "Sesuai",
          "berminat_bekerja_di_ln": true,
          "nama_perusahaan_bekerja": "Kanabe"
        }
      }
    ]
  }
}</pre>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="flex justify-end">
        <button
          @click="closeModalProgramLembagaID"
          type="button"
          class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
        >
          Close
        </button>
      </div>
    </template>
  </Modal>

  <Modal size="7xl" v-if="isShowModalPenyelenggaraMagangNIB" @close="closeModalPenyelenggaraMagangNIB">
    <template #header>
      <div class="flex items-center text-lg">
        <span class="mr-4 rounded-lg bg-green-400 px-2.5 py-1.5 text-white">GET</span>Detail Penyelenggara Magang berdasarkan NIB
      </div>
    </template>
    <template #body>
      <div class="flex flex-col">
        <div class="mb-2">URL</div>
        <div class="w-full rounded bg-gray-200 p-4 text-gray-700">{{ API_URL }}/api/penyelenggara_magang/{nib}</div>
        <div class="mb-2 mt-4">Contoh Response</div>
        <div class="h-72 w-full overflow-y-auto rounded bg-gray-200 p-4 text-sm text-gray-700">
<pre>{
  "success": true,
  "message": "Data dari tabel: penyelenggara_magang",
  "data": {
    "nib": "1234567891",
    "nama_penyelenggara": "PT. Kabayan Aishwarya",
    "bidang_usaha_sektor": "Teknologi Informasi",
    "alamat_penyelenggara": "Jalan Amier No 12",
    "no_telp": "086253742532",
    "email": "sejahtera.terpadu@gmail.com",
    "tipe_penyelenggara": "dalam_negeri",
    "nama_kabupaten_kota": "KAB TIMOR TENGAH SELATAN",
    "created_at": "2023-08-21 09:54:00",
    "updated_at": "2023-08-21 09:54:00",
    "deleted_at": null,
    "program_pemagangan": [
      {
        "id": 3,
        "yang_mengeluarkan_persetujuan_magang": "Swasta",
        "nomor_surat_persetujuan": "SP01.03/03/2023",
        "tahun_penyelenggaraan": 2023,
        "tanggal_mulai": "2023-03-21",
        "tanggal_selesai": "2023-08-31",
        "status_selesai": "Selesai",
        "masa_berlaku_izin": "2023-08-21",
        "nama_mentor": "FADHIL FERDIAN",
        "negara_tujuan_pemagangan": "Indonesia"
      },
      {
        "id": 4,
        "yang_mengeluarkan_persetujuan_magang": "Pribadi",
        "nomor_surat_persetujuan": "SP01.03/03/2023",
        "tahun_penyelenggaraan": 2023,
        "tanggal_mulai": "2023-04-21",
        "tanggal_selesai": "2023-08-31",
        "status_selesai": "Selesai",
        "masa_berlaku_izin": "2023-08-21",
        "nama_mentor": "FADHIL FERDIAN",
        "negara_tujuan_pemagangan": "Indonesia"
      },
      {
        "id": 5,
        "yang_mengeluarkan_persetujuan_magang": "Pemerintah",
        "nomor_surat_persetujuan": "SP01.03/03/2023",
        "tahun_penyelenggaraan": 2023,
        "tanggal_mulai": "2023-05-21",
        "tanggal_selesai": "2023-08-31",
        "status_selesai": "Selesai",
        "masa_berlaku_izin": "2023-08-21",
        "nama_mentor": "FADHIL FERDIAN",
        "negara_tujuan_pemagangan": "Indonesia"
      },
      {
        "id": 6,
        "yang_mengeluarkan_persetujuan_magang": "Yayasan",
        "nomor_surat_persetujuan": "SP01.03/03/2023",
        "tahun_penyelenggaraan": 2023,
        "tanggal_mulai": "2023-06-21",
        "tanggal_selesai": "2023-08-31",
        "status_selesai": "Selesai",
        "masa_berlaku_izin": "2023-08-21",
        "nama_mentor": "FADHIL FERDIAN",
        "negara_tujuan_pemagangan": "Indonesia"
      },
      {
        "id": 7,
        "yang_mengeluarkan_persetujuan_magang": "Swasta",
        "nomor_surat_persetujuan": "SP01.03/03/2023",
        "tahun_penyelenggaraan": 2023,
        "tanggal_mulai": "2023-07-21",
        "tanggal_selesai": "2023-08-31",
        "status_selesai": "Selesai",
        "masa_berlaku_izin": "2023-08-21",
        "nama_mentor": "FADHIL FERDIAN",
        "negara_tujuan_pemagangan": "Indonesia"
      },
      {
        "id": 9,
        "yang_mengeluarkan_persetujuan_magang": "Pemerintah",
        "nomor_surat_persetujuan": "SP01.03/03/2023",
        "tahun_penyelenggaraan": 2023,
        "tanggal_mulai": "2023-09-21",
        "tanggal_selesai": "2023-08-31",
        "status_selesai": "Selesai",
        "masa_berlaku_izin": "2023-08-21",
        "nama_mentor": "FADHIL FERDIAN",
        "negara_tujuan_pemagangan": "Indonesia"
      },
      {
        "id": 10,
        "yang_mengeluarkan_persetujuan_magang": "Yayasan",
        "nomor_surat_persetujuan": "SP01.03/03/2023",
        "tahun_penyelenggaraan": 2023,
        "tanggal_mulai": "2023-10-21",
        "tanggal_selesai": "2023-08-31",
        "status_selesai": "Selesai",
        "masa_berlaku_izin": "2023-08-21",
        "nama_mentor": "FADHIL FERDIAN",
        "negara_tujuan_pemagangan": "Indonesia"
      },
      {
        "id": 8,
        "yang_mengeluarkan_persetujuan_magang": "Pribadi",
        "nomor_surat_persetujuan": "SP01.03/03/2023",
        "tahun_penyelenggaraan": 2023,
        "tanggal_mulai": "2023-08-21",
        "tanggal_selesai": "2023-08-31",
        "status_selesai": "Selesai",
        "masa_berlaku_izin": "2023-08-21",
        "nama_mentor": "FADHIL FERDIAN",
        "negara_tujuan_pemagangan": "Indonesia"
      },
      {
        "id": 11,
        "yang_mengeluarkan_persetujuan_magang": "Swasta",
        "nomor_surat_persetujuan": "SP01.03/03/2023",
        "tahun_penyelenggaraan": 2023,
        "tanggal_mulai": "2023-08-21",
        "tanggal_selesai": "2023-08-31",
        "status_selesai": "Selesai",
        "masa_berlaku_izin": "2023-08-21",
        "nama_mentor": "FADHIL FERDIAN",
        "negara_tujuan_pemagangan": "Indonesia"
      },
      {
        "id": 12,
        "yang_mengeluarkan_persetujuan_magang": "Swasta",
        "nomor_surat_persetujuan": "SP01.03/03/2023",
        "tahun_penyelenggaraan": 2023,
        "tanggal_mulai": "2023-08-21",
        "tanggal_selesai": "2023-08-31",
        "status_selesai": "Selesai",
        "masa_berlaku_izin": "2023-08-21",
        "nama_mentor": "FADHIL FERDIAN",
        "negara_tujuan_pemagangan": "Indonesia"
      },
      {
        "id": 2,
        "yang_mengeluarkan_persetujuan_magang": "Yayasan",
        "nomor_surat_persetujuan": "SP01.03/03/2023",
        "tahun_penyelenggaraan": 2023,
        "tanggal_mulai": "2023-02-21",
        "tanggal_selesai": "2023-08-31",
        "status_selesai": "Selesai",
        "masa_berlaku_izin": "2023-08-21",
        "nama_mentor": "FADHIL FERDIAN",
        "negara_tujuan_pemagangan": "Indonesia"
      }
    ]
  }
}</pre>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="flex justify-end">
        <button
          @click="closeModalPenyelenggaraMagangNIB"
          type="button"
          class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
        >
          Close
        </button>
      </div>
    </template>
  </Modal>

  <Modal size="7xl" v-if="isShowModalProgramPemaganganID" @close="closeModalProgramPemaganganID">
    <template #header>
      <div class="flex items-center text-lg">
        <span class="mr-4 rounded-lg bg-green-400 px-2.5 py-1.5 text-white">GET</span>Detail Program Pemagangan berdasarkan ID
      </div>
    </template>
    <template #body>
      <div class="flex flex-col">
        <div class="mb-2">URL</div>
        <div class="w-full rounded bg-gray-200 p-4 text-gray-700">{{ API_URL }}/api/program_pemagangan/{id}</div>
        <div class="mb-2 mt-4">Contoh Response</div>
        <div class="h-72 w-full overflow-y-auto rounded bg-gray-200 p-4 text-sm text-gray-700">
<pre>{
  "success": true,
  "message": "Data dari tabel: program_pemagangan",
  "data": {
    "id": 1,
    "yang_mengeluarkan_persetujuan_magang": "Pemerintah",
    "nomor_surat_persetujuan": "SP01.02/03/2023",
    "tahun_penyelenggaraan": 2023,
    "tanggal_mulai": "2023-01-21",
    "tanggal_selesai": "2023-08-31",
    "status_selesai": "Selesai",
    "masa_berlaku_izin": "2023-08-21",
    "nama_mentor": "ASEP JUNAIDI",
    "negara_tujuan_pemagangan": "Indonesia",
    "id_penyelenggara_magang": "1234567890",
    "created_at": "2023-08-21 09:54:00",
    "updated_at": "2023-08-21 09:54:00",
    "deleted_at": null,
    "penyelenggara_magang": {
      "nib": "1234567890",
      "nama_penyelenggara": "PT. Sejahtera Terpadu"
    },
    "jabatan_pemagangan": [
      {
        "id": 1,
        "nama_kbji": "214 (3) Arsitek, Perencana, Surveyor dan Desainer",
        "durasi_pemagangan": 120,
        "peserta": [
          {
            "nik": "5203180607000003",
            "nama_peserta": "FADHIL FERDIAN",
            "kode_transaksi_pelatihan": "1901620801-D5240908",
            "informasi_penempatan": {
              "status_kebekerjaan": "Bekerja",
              "sumber_data_penempatan": "Peserta",
              "kesesuaian_pelatihan_dgn_penempatan": "Sesuai",
              "berminat_bekerja_di_ln": true,
              "nama_perusahaan_bekerja": "Kanabe"
            }
          },
          {
            "nik": "5203180607000002",
            "nama_peserta": "JUWANDI WIJAYA",
            "kode_transaksi_pelatihan": "1901620801-D5240907",
            "informasi_penempatan": {
              "status_kebekerjaan": "Bekerja",
              "sumber_data_penempatan": "Peserta",
              "kesesuaian_pelatihan_dgn_penempatan": "Sesuai",
              "berminat_bekerja_di_ln": true,
              "nama_perusahaan_bekerja": "Kanabe"
            }
          }
        ]
      }
    ]
  }
}</pre>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="flex justify-end">
        <button
          @click="closeModalProgramPemaganganID"
          type="button"
          class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
        >
          Close
        </button>
      </div>
    </template>
  </Modal>
</template>

<script>
import { Modal } from "flowbite-vue";
import { ref } from "vue";
import Particles from '../Shared/Particles.vue';

export default {
  name: "ApiGenerator",

  data() {
    return {
      API_URL: import.meta.env.VITE_API_URL,
    };
  },

  components: {
    Modal,
    Particles,
  },

  setup() {
    const isShowModalPeserta = ref(false);

    function closeModalPeserta() {
      isShowModalPeserta.value = false;
    }

    function showModalPeserta() {
      isShowModalPeserta.value = true;
    }

    const isShowModalProgramPelatihan = ref(false);

    function closeModalProgramPelatihan() {
      isShowModalProgramPelatihan.value = false;
    }

    function showModalProgramPelatihan() {
      isShowModalProgramPelatihan.value = true;
    }

    const isShowModalTenagaPelatihan = ref(false);

    function closeModalTenagaPelatihan() {
      isShowModalTenagaPelatihan.value = false;
    }

    function showModalTenagaPelatihan() {
      isShowModalTenagaPelatihan.value = true;
    }

    const isShowModalLembagaPelatihan = ref(false);

    function closeModalLembagaPelatihan() {
      isShowModalLembagaPelatihan.value = false;
    }

    function showModalLembagaPelatihan() {
      isShowModalLembagaPelatihan.value = true;
    }

    const isShowModalInstruktur = ref(false);

    function closeModalInstruktur() {
      isShowModalInstruktur.value = false;
    }

    function showModalInstruktur() {
      isShowModalInstruktur.value = true;
    }

    const isShowModalProgramLembaga = ref(false);

    function closeModalProgramLembaga() {
      isShowModalProgramLembaga.value = false;
    }

    function showModalProgramLembaga() {
      isShowModalProgramLembaga.value = true;
    }

    const isShowModalPenyelenggaraMagang = ref(false);

    function closeModalPenyelenggaraMagang() {
      isShowModalPenyelenggaraMagang.value = false;
    }

    function showModalPenyelenggaraMagang() {
      isShowModalPenyelenggaraMagang.value = true;
    }

    const isShowModalProgramPemagangan = ref(false);

    function closeModalProgramPemagangan() {
      isShowModalProgramPemagangan.value = false;
    }

    function showModalProgramPemagangan() {
      isShowModalProgramPemagangan.value = true;
    }

    const isShowModalPesertaPelatihanNIK = ref(false);

    function closeModalPesertaPelatihanNIK() {
      isShowModalPesertaPelatihanNIK.value = false;
    }

    function showModalPesertaPelatihanNIK() {
      isShowModalPesertaPelatihanNIK.value = true;
    }

    const isShowModalPesertaPemaganganNIK = ref(false);

    function closeModalPesertaPemaganganNIK() {
      isShowModalPesertaPemaganganNIK.value = false;
    }

    function showModalPesertaPemaganganNIK() {
      isShowModalPesertaPemaganganNIK.value = true;
    }

    const isShowModalLembagaPelatihanVIN = ref(false);

    function closeModalLembagaPelatihanVIN() {
      isShowModalLembagaPelatihanVIN.value = false;
    }

    function showModalLembagaPelatihanVIN() {
      isShowModalLembagaPelatihanVIN.value = true;
    }

    const isShowModalTenagaPelatihanNIK = ref(false);

    function closeModalTenagaPelatihanNIK() {
      isShowModalTenagaPelatihanNIK.value = false;
    }

    function showModalTenagaPelatihanNIK() {
      isShowModalTenagaPelatihanNIK.value = true;
    }

    const isShowModalInstrukturNIK = ref(false);

    function closeModalInstrukturNIK() {
      isShowModalInstrukturNIK.value = false;
    }

    function showModalInstrukturNIK() {
      isShowModalInstrukturNIK.value = true;
    }

    const isShowModalProgramPelatihanCourseCode = ref(false);

    function closeModalProgramPelatihanCourseCode() {
      isShowModalProgramPelatihanCourseCode.value = false;
    }

    function showModalProgramPelatihanCourseCode() {
      isShowModalProgramPelatihanCourseCode.value = true;
    }

    const isShowModalProgramLembagaID = ref(false);

    function closeModalProgramLembagaID() {
      isShowModalProgramLembagaID.value = false;
    }

    function showModalProgramLembagaID() {
      isShowModalProgramLembagaID.value = true;
    }

    const isShowModalPenyelenggaraMagangNIB = ref(false);

    function closeModalPenyelenggaraMagangNIB() {
      isShowModalPenyelenggaraMagangNIB.value = false;
    }

    function showModalPenyelenggaraMagangNIB() {
      isShowModalPenyelenggaraMagangNIB.value = true;
    }

    const isShowModalProgramPemaganganID = ref(false);

    function closeModalProgramPemaganganID() {
      isShowModalProgramPemaganganID.value = false;
    }

    function showModalProgramPemaganganID() {
      isShowModalProgramPemaganganID.value = true;
    }

    return {
      isShowModalProgramPemaganganID,
      closeModalProgramPemaganganID,
      showModalProgramPemaganganID,

      isShowModalPenyelenggaraMagangNIB,
      closeModalPenyelenggaraMagangNIB,
      showModalPenyelenggaraMagangNIB,

      isShowModalProgramLembagaID,
      closeModalProgramLembagaID,
      showModalProgramLembagaID,

      isShowModalProgramPelatihanCourseCode,
      closeModalProgramPelatihanCourseCode,
      showModalProgramPelatihanCourseCode,

      isShowModalInstrukturNIK,
      closeModalInstrukturNIK,
      showModalInstrukturNIK,

      isShowModalTenagaPelatihanNIK,
      closeModalTenagaPelatihanNIK,
      showModalTenagaPelatihanNIK,

      isShowModalLembagaPelatihanVIN,
      closeModalLembagaPelatihanVIN,
      showModalLembagaPelatihanVIN,

      isShowModalPesertaPemaganganNIK,
      closeModalPesertaPemaganganNIK,
      showModalPesertaPemaganganNIK,

      isShowModalPesertaPelatihanNIK,
      closeModalPesertaPelatihanNIK,
      showModalPesertaPelatihanNIK,

      isShowModalProgramPemagangan,
      closeModalProgramPemagangan,
      showModalProgramPemagangan,

      isShowModalPenyelenggaraMagang,
      closeModalPenyelenggaraMagang,
      showModalPenyelenggaraMagang,

      isShowModalProgramLembaga,
      closeModalProgramLembaga,
      showModalProgramLembaga,

      isShowModalProgramPelatihan,
      closeModalProgramPelatihan,
      showModalProgramPelatihan,

      isShowModalInstruktur,
      closeModalInstruktur,
      showModalInstruktur,

      isShowModalTenagaPelatihan,
      closeModalTenagaPelatihan,
      showModalTenagaPelatihan,

      isShowModalPeserta,
      closeModalPeserta,
      showModalPeserta,
      
      isShowModalLembagaPelatihan,
      closeModalLembagaPelatihan,
      showModalLembagaPelatihan,
    };
  },
};
</script>
