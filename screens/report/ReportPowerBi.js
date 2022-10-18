import React from 'react';
// import { PowerBIEmbed } from 'powerbi-client-react';
// import { models } from 'powerbi-client';
import { SideBar } from '../../components/sidebar/SideBar';
import { HeaderLogin } from '../../components/HeaderLogin';



export const ReportPowerBi = () => {
  return (
    <frameElement>
      <HeaderLogin />
      <SideBar />
      <div className="body-report">
        <div >
          <iframe title="Report" className="embed-size" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=498e909e-9a3b-41da-b146-c801143d237e&autoAuth=true&ctid=ed37866a-aff6-477b-a9fb-083ceca4c052&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXVzLWVhc3QtYS1wcmltYXJ5LXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9" frameborder="0" allowFullScreen="true"></iframe>
          {/*
          <PowerBIEmbed
            embedConfig={{
              type: 'report',   // Supported types: report, dashboard, tile, visual and qna
              id: '498e909e-9a3b-41da-b146-c801143d237e',
              embedUrl: "https://app.powerbi.com/reportEmbed?reportId=498e909e-9a3b-41da-b146-c801143d237e&groupId=e8bf7bc2-cb5d-4200-a8d2-ea65730de860&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUVBU1QtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJtb2Rlcm5FbWJlZCI6dHJ1ZSwiY2VydGlmaWVkVGVsZW1ldHJ5RW1iZWQiOnRydWUsInVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlfX0%3d",
              accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Imwzc1EtNTBjQ0g0eEJWWkxIVEd3blNSNzY4MCIsImtpZCI6Imwzc1EtNTBjQ0g0eEJWWkxIVEd3blNSNzY4MCJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZWQzNzg2NmEtYWZmNi00NzdiLWE5ZmItMDgzY2VjYTRjMDUyLyIsImlhdCI6MTYzNzg1OTkwMiwibmJmIjoxNjM3ODU5OTAyLCJleHAiOjE2Mzc4NjM5MTYsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84VEFBQUE4ZjNNeC9GNkFtWEUwOWpMQzFpd1FVQUtzS29kQ0pGaVFBK2YvSE1DVHJERE13aEg5dEszRnZER1pjeG1xeWFSQkk1RkZMNWRMUkcydlhCVDM3MFVOWlVwaHV1MGQzQkorZzZPUm1qbXJiMD0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcGlkIjoiODcxYzAxMGYtNWU2MS00ZmIxLTgzYWMtOTg2MTBhN2U5MTEwIiwiYXBwaWRhY3IiOiIyIiwiZmFtaWx5X25hbWUiOiJKaW3DqW5leiIsImdpdmVuX25hbWUiOiJTY290dGllIiwiaXBhZGRyIjoiMTQ4LjAuMTIuNDIiLCJuYW1lIjoiU2NvdHRpZSBKaW3DqW5leiIsIm9pZCI6ImJjZmRiNWFmLTk1ODMtNDAzZi1iN2MwLTEwMjg3NGY1MDMwZSIsInB1aWQiOiIxMDAzMjAwMTdCQTA5NTFDIiwicmgiOiIwLkFTa0Fhb1kzN2ZhdmUwZXAtd2c4N0tUQVVnOEJISWRoWHJGUGc2eVlZUXAta1JBcEFHMC4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzdWIiOiJCLVl1YV8wZ0t2MFdSaWNwRURRS05ZZkNuQlJsYm1MRVlpT1EzRDVoek5ZIiwidGlkIjoiZWQzNzg2NmEtYWZmNi00NzdiLWE5ZmItMDgzY2VjYTRjMDUyIiwidW5pcXVlX25hbWUiOiJzamltZW5lekBzdGlkYXRvcy5jb20iLCJ1cG4iOiJzamltZW5lekBzdGlkYXRvcy5jb20iLCJ1dGkiOiJ0YnhzRmg2c3QwaWxSYURiVkpIUUFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.b0GqOkL6EhApQQPNNjSBm59E12WhDCAQLrP1IhxXTukYOtv0kPYkeqsrRtKdJT0at0akXvj8ul0JF9uG6_hkwHTZjfGteNJbDvgngUzt46hJRjAF3zMemLEj20CaX0eOWMH5x4G8XaAvg79vniw5ZHmqnoav_Sd77WeDxZO_DErSZSkgRhN7XwWzKICIGeP_z7jImfLgEm0gKLJ4BUcUInoy5cbcxBduOwojy4O49L3UVIaOsI-j_FAGnS1fqaS2y0sFqNWrKerLFEhjCdWfzyKOJQ81-QwQ-gtT0nOTrM-EkkCsSnZDZzL1R7TK29KGQL5Q2yLQAXxSJXuPUrvbiQ',
              tokenType: models.TokenType.Aad,
              settings: {
                panes: {
                  filters: {
                    expanded: false,
                    visible: true
                  }
                },

              }
            }}

            eventHandlers={
              new Map([
                ['loaded', function () { console.log('Report loaded'); }],
                ['rendered', function () { console.log('Report rendered'); }],
                ['error', function (event) { console.log(event.detail); }]
              ])
            }

            cssClassName={"embed-size"}

            getEmbeddedComponent={(embeddedReport) => {
              window.report = embeddedReport;
            }}
          /> */}
        </div>
      </div >
    </frameElement >
  )
}
